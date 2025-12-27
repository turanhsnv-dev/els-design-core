// src/components/sections/playground/DesignStudio.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Reorder } from "framer-motion";
import { 
  Square, 
  Circle, 
  Type, 
  Image as ImageIcon, 
  Trash2, 
  MousePointer2, 
  RotateCw, 
  Maximize, 
  Palette,
  Layers,
  Undo
} from "lucide-react";

// Tiplər
type ElementType = "rect" | "circle" | "text";

interface CanvasElement {
  id: string;
  type: ElementType;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  borderRadius: number;
  color: string;
  text?: string;
  zIndex: number;
}

// Rəng Palitrası
const COLORS = [
  "#6467f2", // Primary
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#ef4444", // Red
  "#ec4899", // Pink
  "#8b5cf6", // Violet
  "#ffffff", // White
  "#1e1e2e", // Dark
];

export default function DesignStudio() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Element əlavə etmək
  const addElement = (type: ElementType) => {
    const newElement: CanvasElement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      x: Math.random() * 200 + 100, // Random mövqe
      y: Math.random() * 200 + 100,
      width: type === "text" ? 200 : 100,
      height: type === "text" ? 50 : 100,
      rotation: 0,
      borderRadius: type === "circle" ? 50 : 0,
      color: COLORS[Math.floor(Math.random() * 4)], // Random ilk 4 rəngdən biri
      text: type === "text" ? "Double Click to Edit" : undefined,
      zIndex: elements.length + 1,
    };
    setElements([...elements, newElement]);
    setSelectedId(newElement.id);
  };

  // Seçimi ləğv etmək (boşluğa basanda)
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current) {
      setSelectedId(null);
    }
  };

  // Xüsusiyyətləri dəyişdirmək
  const updateElement = (id: string, key: keyof CanvasElement, value: any) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, [key]: value } : el))
    );
  };

  // Silmək (Delete düyməsi ilə)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && selectedId) {
        setElements((prev) => prev.filter((el) => el.id !== selectedId));
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedId]);

  const selectedElement = elements.find((el) => el.id === selectedId);

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-24 flex flex-col items-center">
      
      {/* HEADER */}
      <div className="text-center mb-10 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            <Layers size={14} />
            <span>Prototyping Lab</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
           Design <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Playground</span>
        </h2>
        <p className="text-slate-400">
            A mini creative studio. Add shapes, tweak properties, and build your layout.
        </p>
      </div>

      {/* EDITOR CONTAINER */}
      <div className="relative w-full h-[700px] bg-background-dark rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex">
        
        {/* --- LEFT TOOLBAR --- */}
        <div className="w-16 md:w-20 bg-[#151621] border-r border-white/5 flex flex-col items-center py-6 gap-6 z-20">
            <ToolButton icon={<MousePointer2 size={20} />} label="Select" active />
            <div className="w-8 h-px bg-white/10" />
            <ToolButton icon={<Square size={20} />} label="Rectangle" onClick={() => addElement("rect")} />
            <ToolButton icon={<Circle size={20} />} label="Circle" onClick={() => addElement("circle")} />
            <ToolButton icon={<Type size={20} />} label="Text" onClick={() => addElement("text")} />
            <div className="mt-auto">
                 <ToolButton icon={<Undo size={20} />} label="Reset" onClick={() => setElements([])} />
            </div>
        </div>

        {/* --- CENTER CANVAS --- */}
        <div 
            ref={containerRef}
            onClick={handleBackgroundClick}
            className="flex-1 relative overflow-hidden cursor-default bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5"
        >
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#4a4a5e 1px, transparent 1px), linear-gradient(90deg, #4a4a5e 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />

            {/* Elements */}
            {elements.map((el) => (
                <CanvasItem 
                    key={el.id} 
                    data={el} 
                    isSelected={selectedId === el.id} 
                    onSelect={() => setSelectedId(el.id)}
                    onChange={(newPos) => {
                        updateElement(el.id, "x", newPos.x);
                        updateElement(el.id, "y", newPos.y);
                    }}
                />
            ))}

            {elements.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-slate-600 pointer-events-none">
                    <p>Select a tool to start designing</p>
                </div>
            )}
        </div>

        {/* --- RIGHT PROPERTIES PANEL --- */}
        {selectedElement ? (
            <div className="w-64 bg-[#151621] border-l border-white/5 p-6 flex flex-col gap-6 z-20 animate-slide-in-right">
                <div>
                    <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-white/5 pb-2">Properties</h3>
                    
                    {/* Position Info (Read only) */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        <PropDisplay label="X" value={Math.round(selectedElement.x)} />
                        <PropDisplay label="Y" value={Math.round(selectedElement.y)} />
                    </div>
                </div>

                {/* Color Picker */}
                <div>
                    <label className="text-slate-400 text-xs font-bold mb-2 flex items-center gap-2"><Palette size={14} /> Fill Color</label>
                    <div className="grid grid-cols-4 gap-2">
                        {COLORS.map(color => (
                            <button 
                                key={color}
                                onClick={() => updateElement(selectedElement.id, "color", color)}
                                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${selectedElement.color === color ? "border-white" : "border-transparent"}`}
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>

                {/* Size & Rotation Controls */}
                <div className="space-y-4">
                     <RangeControl 
                        label="Rotation" 
                        icon={<RotateCw size={14} />} 
                        value={selectedElement.rotation} 
                        min={0} max={360} 
                        onChange={(val: number) => updateElement(selectedElement.id, "rotation", val)} 
                     />
                     
                     <RangeControl 
                        label="Size (Scale)" 
                        icon={<Maximize size={14} />} 
                        value={selectedElement.width} 
                        min={50} max={400} 
                        onChange={(val: number) => {
                            updateElement(selectedElement.id, "width", val);
                            if(selectedElement.type !== 'text') updateElement(selectedElement.id, "height", val); // Keep aspect ratio roughly
                        }} 
                     />
                     
                     {selectedElement.type !== "circle" && selectedElement.type !== "text" && (
                         <RangeControl 
                            label="Corner Radius" 
                            icon={<Square size={14} />} 
                            value={selectedElement.borderRadius} 
                            min={0} max={100} 
                            onChange={(val: number) => updateElement(selectedElement.id, "borderRadius", val)} 
                         />
                     )}
                </div>

                {/* Actions */}
                <div className="mt-auto pt-4 border-t border-white/5">
                    <button 
                        onClick={() => {
                            setElements(prev => prev.filter(e => e.id !== selectedId));
                            setSelectedId(null);
                        }}
                        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-bold"
                    >
                        <Trash2 size={16} /> Delete Layer
                    </button>
                </div>
            </div>
        ) : (
            <div className="w-64 bg-[#151621] border-l border-white/5 p-6 flex flex-col items-center justify-center text-center z-20">
                <Layers className="text-slate-600 mb-4" size={48} />
                <p className="text-slate-500 text-sm">Select an element to edit properties</p>
            </div>
        )}

      </div>
    </section>
  );
}

// --- SUB COMPONENTS ---

// 1. Tool Button
function ToolButton({ icon, label, onClick, active }: { icon: any, label: string, onClick?: () => void, active?: boolean }) {
    return (
        <button 
            onClick={onClick}
            className={`
                group relative w-10 h-10 flex items-center justify-center rounded-xl transition-all
                ${active ? "bg-primary text-white" : "text-slate-400 hover:bg-white/10 hover:text-white"}
            `}
        >
            {icon}
            <span className="absolute left-full ml-4 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {label}
            </span>
        </button>
    )
}

// 2. Draggable Canvas Item
function CanvasItem({ data, isSelected, onSelect, onChange }: { data: CanvasElement, isSelected: boolean, onSelect: () => void, onChange: (pos: {x: number, y: number}) => void }) {
    return (
        <motion.div
            drag
            dragMomentum={false}
            onDragEnd={(_, info) => {
                onChange({ x: data.x + info.offset.x, y: data.y + info.offset.y })
            }}
            onClick={(e) => {
                e.stopPropagation();
                onSelect();
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{
                x: data.x,
                y: data.y,
                width: data.type === 'text' ? 'auto' : data.width,
                height: data.type === 'text' ? 'auto' : data.height,
                rotate: data.rotation,
                backgroundColor: data.type === 'text' ? 'transparent' : data.color,
                color: data.type === 'text' ? data.color : 'transparent',
                borderRadius: data.borderRadius,
                zIndex: data.zIndex,
                position: 'absolute',
                cursor: 'grab'
            }}
            className={`
                flex items-center justify-center font-bold text-xl
                ${isSelected ? "ring-2 ring-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" : "hover:ring-1 hover:ring-white/30"}
            `}
        >
            {data.type === 'text' ? (
                <span className="whitespace-nowrap px-2">{data.text}</span>
            ) : null}
            
            {/* Selection Handles (Visual only) */}
            {isSelected && data.type !== 'text' && (
                <>
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-full" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-full" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-full" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-full" />
                </>
            )}
        </motion.div>
    )
}

// 3. Property Display
function PropDisplay({ label, value }: { label: string, value: number }) {
    return (
        <div className="bg-white/5 rounded px-2 py-1 flex justify-between items-center">
            <span className="text-slate-500 text-xs">{label}</span>
            <span className="text-white text-xs font-mono">{value}</span>
        </div>
    )
}

// 4. Range Slider Control
function RangeControl({ label, icon, value, min, max, onChange }: { label: string, icon: any, value: number, min: number, max: number, onChange: (value: number) => void }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <label className="text-slate-400 text-xs font-bold flex items-center gap-2">{icon} {label}</label>
                <span className="text-white text-xs">{Math.round(value)}</span>
            </div>
            <input 
                type="range" 
                min={min} 
                max={max} 
                value={value} 
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
            />
        </div>
    )
}