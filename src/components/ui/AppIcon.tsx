import React from 'react';
import * as LucideIcons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: keyof typeof LucideIcons;
    size?: number;
    color?: string;
    className?: string;
    strokeWidth?: number;
}

function Icon({
    name,
    size = 24,
    color = "currentColor",
    className = "",
    strokeWidth = 2,
    ...props
}: IconProps) {
    const IconComponent = LucideIcons[name];

    // Ensure IconComponent is a valid React component (function or class)
    if (
        typeof IconComponent !== "function" ||
        !(
            // FunctionComponent or class component
            (IconComponent.prototype && IconComponent.prototype.isReactComponent) ||
            // Arrow function component
            String(IconComponent).includes('return React.createElement')
        )
    ) {
        return <HelpCircle size={size} color="gray" strokeWidth={strokeWidth} className={className} {...props} />;
    }

    return React.createElement(IconComponent as React.FC<any>, {
        size,
        color,
        strokeWidth,
        className,
        ...props
    });
}

export default Icon;