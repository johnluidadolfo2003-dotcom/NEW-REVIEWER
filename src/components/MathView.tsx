import React from 'react';
import { CleanMath } from './CleanMath';

interface MathViewProps {
  formula: string;
  className?: string;
  block?: boolean;
}

export const MathView: React.FC<MathViewProps> = ({ formula, className = '', block = false }) => {
  return <CleanMath math={formula} className={className} block={block} />;
};

interface FractionBlockProps {
  label?: string;
  numerator: React.ReactNode;
  denominator: React.ReactNode;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const StackedFraction: React.FC<FractionBlockProps> = ({
  label,
  numerator,
  denominator,
  prefix,
  suffix,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-1.5 font-mono ${className}`}>
      {label && <span className="text-amber-300 font-bold">{label} =</span>}
      {prefix && <span className="text-slate-300">{prefix}</span>}
      <span className="inline-flex flex-col items-center align-middle mx-1 text-center font-semibold">
        <span className="border-b border-amber-400 px-1.5 pb-0.5 leading-tight text-amber-200 text-center w-full">
          {numerator}
        </span>
        <span className="px-1.5 pt-0.5 leading-tight text-slate-300 text-center w-full">
          {denominator}
        </span>
      </span>
      {suffix && <span className="text-slate-300">{suffix}</span>}
    </div>
  );
};

