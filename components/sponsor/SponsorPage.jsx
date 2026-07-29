'use client';

import { Heart, Coffee,Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function SponsorPage() {
// Copy to clipboard helper
const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
};

return (
    <div className="container mx-auto px-4 py-4 max-w-3xl">
        <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold mb-6 text-center"
        >
            Support My Work 💖
        </motion.h1>

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-center mb-8"
        >
            If you enjoy my content or have benefited from my work, you can support me with a small gesture. Every bit helps!
        </motion.p>

        {/* Coffee & Tea Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
                asChild
                variant="default"
                size="lg"
                className="flex items-center gap-2"
            >
                <a href="https://www.buymeacoffee.com/SyedAliNaqi1997?ref=tea" target="_blank" rel="noopener noreferrer">
                    <Coffee className="w-5 h-5" />
                    Buy Me a Coffee
                </a>
            </Button>

            <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
            >
                <a href="https://www.patreon.com/c/SyedAliNaqiHasni" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-5 h-5" />
                    Patreon
                </a>
            </Button>
        </div>

        {/* Manual Payment Options */}
        {/* <Card>
            <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-lg font-semibold">
                    <Banknote className="w-5 h-5 text-green-600" />
                    <span>Support via Easypaisa / JazzCash or IBFT (Inter Bank Fund Transfer)</span>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                    <p>
                        <strong>Account Title:</strong> Syed Ali Naqi Hasni
                    </p>
                    <p className="flex items-center gap-2">
                        <strong>Easypaisa / JazzCash:</strong>
                        <span className="text-foreground">+92-3*******948</span>
                        <Button
                            size="icon"
                            variant="ghost"
                            title="Copy number"
                            onClick={() => handleCopy('03162265948')}
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
                        </Button>
                    </p>
                    <p className="flex items-center gap-2">
                        <strong>IBAN:</strong>
                        <span className="text-foreground">PK16MEZN************8699</span>
                        <Button
                            size="icon"
                            variant="ghost"
                            title="Copy IBAN"
                            onClick={() => handleCopy('PK16MEZN0099260103848699')}
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
                        </Button>
                    </p>
                    <p>
                        <strong>Bank Name:</strong> Meezan Bank Limited 
                    </p>
                    <p>
                        After payment, please send a screenshot via <a className="text-blue-600 underline" href="mailto:syedhasni@gmail.com">email</a> or DM on <a className="text-blue-600 underline" href="https://api.whatsapp.com/send?phone=923162265948">WhatsApp</a> or above social media links.
                    </p>
                </div>
            </CardContent>
        </Card> */}
    </div>
)
}

