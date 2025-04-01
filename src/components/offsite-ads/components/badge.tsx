import { cn } from '@/lib/utils'

interface BadgeProps {
    text: string
    type: 'free-shipping' | 'discount'
}

const Badge = ({ text, type }: BadgeProps) => {
    return (
        <div className={cn('rounded-br-sm px-1.5 py-0.5 text-xs font-medium text-white', type === 'free-shipping' ? 'bg-[#2E90B7]' : 'bg-[#003354]')}>
            {text}
        </div>
    )
}

export default Badge;
