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
    FooterContactSubmitButton,
    FooterSiteMap,
    FooterSiteMapBrand,
    FooterSiteMapNavWrapper,
    FooterSiteMapNav,
    FooterSiteMapNavItem
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

const SiteMapNavWrapper = ({ item }) => {
    return (
        <FooterSiteMapNavWrapper>
            {item.map((menu, index) => (
                <SiteMapNav item={menu} key={index} />
            ))}
        </FooterSiteMapNavWrapper>
    )
}

const SiteMapNav = ({ item }) => {
    return (
        <FooterSiteMapNav>
           <h2>{item.title}</h2>
           <ul>
               {item.items.map((menuItem, index) => (
                   <FooterSiteMapNavItem key={index}>
                       <a href={menuItem.href} title={menuItem.title}>
                           {menuItem.name}
                       </a>
                   </FooterSiteMapNavItem>
               ))}
            </ul>
        </FooterSiteMapNav>
    )
}

export const Footer = () => {
    const {
        content,
        contact,
        siteMap
    } = useContent('shared.footer')

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

                <FooterSiteMap>
                    <FooterSiteMapBrand 
                       href={siteMap.brand.link.href}
                       title={siteMap.brand.link.title}
                    >
                        <Image 
                           width={siteMap.brand.image.width}
                           height={siteMap.brand.image.height}
                           src={siteMap.brand.image.src}
                           alt={siteMap.brand.image.alt}
                        />
                    </FooterSiteMapBrand>

                    <SiteMapNavWrapper item={siteMap.menus} />
                </FooterSiteMap>
            </FooterWrapper>
        </InnerFooter>
    )
};