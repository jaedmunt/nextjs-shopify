import Image from 'next/legacy/image'
import { Builder } from '@builder.io/react'

// CloudinaryImage component registration
Builder.registerComponent(
  (props: any) => {
    if (!props.cloudinaryOptions) {
      return 'Choose an Image'
    }
    return (
      <Image
        src={props.cloudinaryOptions.url}
        width={props.cloudinaryOptions.width}
        height={props.cloudinaryOptions.height}
      />
    )
  },
  {
    name: 'CloudinaryImage',
    image:
      'https://res.cloudinary.com/cloudinary-marketing/image/upload/v1599098500/creative_source/Logo/Cloud%20Glyph/cloudinary_cloud_glyph_blue_png.png',
    inputs: [{ name: 'cloudinaryOptions', type: 'cloudinaryImageEditor' }],
  }
)

// DiamondLineup component registration
Builder.registerComponent(
  (props: any) => {
    return (
      <div>
        {/* Your Diamond lineup component implementation */}
        <iframe
          src={props.diamondLineupUrl}
          width="100%"
          height="500px"
          frameBorder="0"
        />
      </div>
    )
  },
  {
    name: 'DiamondLineup',
    image:
      'https://example.com/path-to-your-diamond-lineup-image.png', // Replace with your image URL
    inputs: [{ name: 'diamondLineupUrl', type: 'url' }],
  }
)
