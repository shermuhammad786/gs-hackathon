import Image from "next/image"

interface ProductGalleryProps {
  images: string
}

export function ProductGallery({ images }: ProductGalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
     
        <div className="relative aspect-square">
          <Image
            src={images}
            alt={images}
            fill
            className="object-cover"
          />
        </div>
      
    </div>
  )
}

