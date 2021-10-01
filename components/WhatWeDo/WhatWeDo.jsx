import Image from 'next/image'
import { useContent } from '@contexts/ContentProvider'
import {
    WhatWeDo as InnerWhatWeDo,
    WhatWeDoWrapper,
    WhatWeDoContent,
    WhatWeDoContentTitle,
    WhatWeDoContentDescription,
    WhatWeDoExamples,
    WhatWeDoExamplesItem
} from './WhatWeDo.style'

const ExamplesItem = ({ item }) => {
    return (
        <WhatWeDoExamplesItem>
            <h2>{item.title}</h2>
            <Image 
               width={item.image.width}
               height={item.image.height}
               src={item.image.src}
               alt={item.image.alt}
            />
            <p>{item.description}</p>
        </WhatWeDoExamplesItem>
    )
}

export const WhatWeDo = () => {
    const {
        content,
        examples
    } = useContent('home.whatWeDo')

    return (
        <InnerWhatWeDo>
            <WhatWeDoWrapper>
                <WhatWeDoContent>
                    <WhatWeDoContentTitle>{content.title}</WhatWeDoContentTitle>
                    <WhatWeDoContentDescription>{content.description}</WhatWeDoContentDescription>
                </WhatWeDoContent>
                <WhatWeDoExamples>
                    {examples.map((item, index) => (
                        <ExamplesItem item={item} key={index} />
                    ))}
                </WhatWeDoExamples>
            </WhatWeDoWrapper>
        </InnerWhatWeDo>
    )
}