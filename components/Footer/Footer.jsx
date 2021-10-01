import Image from 'next/image'
import { useState } from 'react'
import { useContent } from '@contexts/ContentProvider'
import { 
    Footer as InnerFooter,
    FooterWrapper,
    FooterContent,
    FooterContentTitle,
    FooterContentDescription,
    FooterContentSocialMedia,
    FooterContentSocialMediaItem,
    FooterContact,
    FooterContactTextField,
    FooterContactMessageField,
    FooterContactSubmitButton
 } from './Footer.style'

const SocialMediaItem = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <FooterContentSocialMediaItem>
            <a href={item.href} title={item.title}>
                <Image 
                   width={item.image.width}
                   height={item.image.height}
                   src={isHovered ? item.image.isHoveredSrc : item.image.src}
                   alt={item.image.alt}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}
                />
            </a>
        </FooterContentSocialMediaItem>
    )
}

const ContactForm = ({ item }) => {
    const [textFields, setTextFields] = useState(item.textFields.map(textField => textField.value))
    const [messageField, setMessageField] = useState(item.messageField.value)

    return (
        <FooterContact onSubmit={e => e.preventDefault()}>
            {item.textFields.map((textField, index) => (
                <FooterContactTextField 
                   value={textFields[index]} 
                   name={textField.name} 
                   type='text' 
                   key={index} 
                   onChange={e => setTextFields([
                    ...textFields.slice(0, index),
                    e.target.value,
                    ...textFields.slice(index + 1)
                   ])}
                />
            ))}
            <FooterContactMessageField 
               value={messageField}
               onChange={e => setMessageField(e.target.value)}
            />
            <FooterContactSubmitButton 
               value={item.submitButton.value} 
               type='submit'
            />
        </FooterContact>
    )
}

export const Footer = () => {
    const {
        content,
        contact
    } = useContent('home.footer')

    return (
        <InnerFooter>
            <FooterWrapper>
                <FooterContent>
                    <FooterContentTitle>{content.title}</FooterContentTitle>
                    <FooterContentDescription>{content.description}</FooterContentDescription>
                    <FooterContentSocialMedia>
                        {content.socialMedia.map((item, index) => (
                            <SocialMediaItem item={item} key={index} />
                        ))}
                    </FooterContentSocialMedia>
                </FooterContent>

                <ContactForm item={contact}/>
            </FooterWrapper>
        </InnerFooter>
    )
};