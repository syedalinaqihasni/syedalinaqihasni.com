import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FaWhatsapp, FaDiscord, FaEtsy, FaFacebook, FaInstagram, FaLinkedin,
  FaLink, FaSpotify, FaPatreon, FaPaypal, FaPinterest, FaSnapchat,
  FaSoundcloud, FaTelegramPlane, FaTiktok, FaTwitch, FaTwitter, FaYoutube,
  FaGithub, FaSignal,
  // FaClubhouse
} from 'react-icons/fa';

// export const metadata: Metadata = {
//   title: 'Links | Syed Ali Naqi Hasni',
//   description:
//     'Find all my social media profiles and important links in one place',
// };
const TEXT = {
  profileAlt: 'Syed Ali Naqi Hasni Profile Picture',
};
const PROFILE = {
  name: 'Syed Ali Naqi Hasni',
  role: 'Front End Developer & UI/UX Designer',
  image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
};



const LINKS = [
  { id: 'whatsapp', url: 'https://api.whatsapp.com/send?phone=923162265948', icon: <FaWhatsapp size={20} />, title: 'WhatsApp', color: 'bg-green-500' },
  // { id: 'clubhouse', url: 'https://clubhouse.com/@SyedAliNaqiHasni', icon: <FaClubhouse size={20} />, title: 'Clubhouse', color: 'bg-yellow-400' },
  { id: 'discord', url: 'https://discord.com/invite/SyedAliNaqiHasni', icon: <FaDiscord size={20} />, title: 'Discord', color: 'bg-indigo-500' },
  { id: 'etsy', url: 'https://etsy.com/shop/SyedAliNaqiHasni', icon: <FaEtsy size={20} />, title: 'Etsy', color: 'bg-orange-600' },
  { id: 'facebook', url: 'https://facebook.com/SyedAliNaqiHasni', icon: <FaFacebook size={20} />, title: 'Facebook', color: 'bg-blue-600' },
  { id: 'instagram', url: 'https://instagram.com/SyedAliNaqiHasni', icon: <FaInstagram size={20} />, title: 'Instagram', color: 'bg-pink-500' },
  { id: 'linkedin', url: 'https://LinkedIn.com/in/SyedAliNaqiHasni', icon: <FaLinkedin size={20} />, title: 'LinkedIn', color: 'bg-blue-700' },
  { id: 'linktree', url: 'https://linktr.ee/?utm_source=linktree&utm_medium=profile&utm_campaign=footer_logo_cta&utm_content=SyedAliNaqiHasni', icon: <FaLink size={20} />, title: 'Linktree', color: 'bg-gray-800' },
  { id: 'spotify', url: 'https://open.spotify.com/artist/SyedAliNaqiHasni', icon: <FaSpotify size={20} />, title: 'Spotify', color: 'bg-green-600' },
  { id: 'patreon', url: 'https://patreon.com/SyedAliNaqiHasni', icon: <FaPatreon size={20} />, title: 'Patreon', color: 'bg-red-600' },
  { id: 'paypal', url: 'https://paypal.com/SyedAliNaqiHasni', icon: <FaPaypal size={20} />, title: 'PayPal', color: 'bg-blue-400' },
  { id: 'pinterest', url: 'https://Pinterest.com/SyedAliNaqiHasni', icon: <FaPinterest size={20} />, title: 'Pinterest', color: 'bg-red-500' },
  { id: 'signal', url: 'https://signal.group/SyedAliNaqiHasni', icon: <FaSignal size={20} />, title: 'Signal Group', color: 'bg-blue-500' },
  { id: 'snapchat', url: 'https://Snapchat.com/add/SyedAliNaqiHasni', icon: <FaSnapchat size={20} />, title: 'Snapchat', color: 'bg-yellow-300' },
  { id: 'soundcloud', url: 'https://SoundCloud.com/SyedAliNaqiHasni', icon: <FaSoundcloud size={20} />, title: 'SoundCloud', color: 'bg-orange-400' },
  { id: 'telegram', url: 'https://t.me/SyedAliNaqiHasni', icon: <FaTelegramPlane size={20} />, title: 'Telegram', color: 'bg-blue-400' },
  { id: 'tiktok', url: 'https://tiktok.com/@syedalinaqihasni', icon: <FaTiktok size={20} />, title: 'TikTok', color: 'bg-black' },
  { id: 'twitch', url: 'https://twitch.me/SyedAliNaqiHasni', icon: <FaTwitch size={20} />, title: 'Twitch', color: 'bg-purple-600' },
  { id: 'twitter', url: 'https://x.com/SyedHasni1997', icon: <FaTwitter size={20} />, title: 'Twitter (X)', color: 'bg-sky-500' },
  { id: 'youtube', url: 'https://YouTube.com/channel/@SyedAliNaqiHasni', icon: <FaYoutube size={20} />, title: 'YouTube', color: 'bg-red-600' },
  { id: 'github', url: 'https://github.com/syedalinaqihasni', icon: <FaGithub size={20} />, title: 'GitHub', color: 'bg-gray-900' },
];
export default function LinksPage() {
  
  const iconStyle = {
    container: 'flex flex-wrap justify-center gap-4 mb-8',
    iconWrapper: 'w-[100px] h-[100px] flex items-center justify-center rounded-full shadow-lg hover:scale-105 transition-transform',
  };
 const cardContentStyles = "p-4";

const gridWrapperStyles = "grid grid-cols-2 gap-4";


const buttonStyles = "w-full justify-start text-white";
  return (
    <>
       <div className="container mx-auto px-4 py-32 md:py-40">
    <div className="max-w-md mx-auto">
      {/* <div className={iconStyle.container}>
        {LINKS.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconStyle.iconWrapper} ${link.color}`}
          >
            {React.cloneElement(link.icon, { size: 40, color: '#fff' })}
          </a>
        ))}
      </div> */}

      <div className="text-center mb-8">
        <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
          <Image
            src={PROFILE.image}
            alt={TEXT.profileAlt}
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold">{PROFILE.name}</h1>
        <p className="text-muted-foreground">{PROFILE.role}</p>
      </div>

      <Card>
    <CardContent className={cardContentStyles}>
      <div className={gridWrapperStyles}>
        {LINKS.map((link) => (
          <Button
            key={link.id}
            asChild
            variant="outline"
            className={`${buttonStyles} ${link.color}`}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <span className="mr-2">{link.icon}</span>
              {link.title}
            </a>
          </Button>
        ))}
      </div>
    </CardContent>
  </Card>
    </div>
  </div>
      
    </>
  );
}
