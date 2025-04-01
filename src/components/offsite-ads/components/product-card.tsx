'use client'

import { cn } from '@/lib/utils'
import Badge from './badge'
import Rating from './rating'

interface ProductCardProps {
  image: string
  badge?: {
    text: string
    type: 'free-shipping' | 'discount'
  }
  rating?: {
    score: number
    total: number
  }
  className?: string
}

const ProductCard = ({
  image,
  badge,
  rating,
  className,
}: ProductCardProps) => {
  return (
      <div className={cn('flex flex-col gap-1.5', className)}>
          <div className="relative aspect-square w-full overflow-hidden">
              <img
                  src={image}
                  alt=""
                  className="object-cover"
              />
              {badge && (
                  <div className="absolute top-0 left-0">
                      <Badge text={badge.text} type={badge.type} />
                  </div>
              )}
          </div>
          {rating && <Rating rating={rating.score} total={rating.total} />}
      </div>
  );
} 

export default ProductCard;
