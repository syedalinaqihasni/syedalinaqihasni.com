// Enhanced Contact Form for syedalinaqihasni.com
'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

const formSchema = z.object({
  userType: z.enum(['individual', 'organization']),
  organizationName: z.string().optional(),
  role: z.string().optional(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  submissionType: z.enum(['query', 'service', 'other']),
  subject: z.string().optional(),
  message: z.string().min(10),
  serviceType: z.string().optional(),
  subServices: z.array(z.string()).optional(),
  projectUrl: z.string().url().optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  file: z.any().optional(),
  preferredContact: z.enum(['email', 'whatsapp', 'phone']),
  timeZone: z.string().optional(),
  bestTimeToContact: z.string().optional(),
  agreement: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to terms.' })
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userType: 'individual',
      preferredContact: 'email',
      subServices: [],
    },
  });

  const watch = form.watch();

  async function onSubmit(values) {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      for (const key in values) {
        if (key === 'file' && values.file?.[0]) {
          formData.append('file', values.file[0]);
        } else if (Array.isArray(values[key])) {
          values[key].forEach((val) => formData.append(`${key}[]`, val));
        } else {
          formData.append(key, values[key]);
        }
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to send');
      toast.success('Message sent successfully!');
      form.reset();
    } catch (err) {
      toast.error('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-card rounded-lg shadow-sm p-6 md:p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField name="userType" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Are you submitting as</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-6">
                  <div><RadioGroupItem value="individual" /> Individual</div>
                  <div><RadioGroupItem value="organization" /> Organization</div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )} />

          {watch.userType === 'organization' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField name="organizationName" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl><Input {...field} type="text" autoComplete="organization" /></FormControl>
                </FormItem>
              )} />
              <FormField name="role" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Role</FormLabel>
                  <FormControl><Input {...field} type="text" autoComplete="organization-title" /></FormControl>
                </FormItem>
              )} />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField name="firstName" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl><Input {...field} type="text" autoComplete="given-name" /></FormControl>
              </FormItem>
            )} />
            <FormField name="lastName" control={form.control} render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl><Input {...field} type="text" autoComplete="family-name" /></FormControl>
              </FormItem>
            )} />
          </div>

          <FormField name="email" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" autoComplete="email" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField name="phone" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl><Input type="tel" autoComplete="tel" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField name="submissionType" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Submission Type</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="query">Query</SelectItem>
                    <SelectItem value="service">Service Needed</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )} />

          {watch.submissionType === 'service' && (
            <>
              <FormField name="serviceType" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Next.js">Next.js</SelectItem>
                        <SelectItem value="WordPress">WordPress</SelectItem>
                        <SelectItem value="Ecommerce">Ecommerce</SelectItem>
                        <SelectItem value="SEO">SEO</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )} />

              {watch.serviceType === 'SEO' && (
                <FormField name="subServices" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel>SEO Sub-services</FormLabel>
                    <div className="flex flex-col gap-2">
                      {['Technical SEO', 'Content SEO', 'Local SEO', 'SEO Audit'].map(item => (
                        <label key={item} className="flex items-center gap-2">
                          <Checkbox
                            checked={field.value?.includes(item)}
                            onCheckedChange={(checked) => {
                              const newVal = checked
                                ? [...(field.value || []), item]
                                : (field.value || []).filter(i => i !== item);
                              field.onChange(newVal);
                            }}
                          /> {item}
                        </label>
                      ))}
                    </div>
                  </FormItem>
                )} />
              )}

              <FormField name="projectUrl" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Project URL (optional)</FormLabel>
                  <FormControl><Input type="url" autoComplete="url" {...field} /></FormControl>
                </FormItem>
              )} />

              <FormField name="budgetRange" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget Range</FormLabel>
                  <FormControl><Input type="text" autoComplete="off" {...field} /></FormControl>
                </FormItem>
              )} />

              <FormField name="timeline" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Timeline</FormLabel>
                  <FormControl><Input type="text" autoComplete="off" {...field} /></FormControl>
                </FormItem>
              )} />

              <FormField name="file" control={form.control} render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload Brief/Doc (optional)</FormLabel>
                  <FormControl>
                    <Input type="file" onChange={(e) => field.onChange(e.target.files)} autoComplete="off" />
                  </FormControl>
                </FormItem>
              )} />
            </>
          )}

          <FormField name="preferredContact" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Preferred Contact Method</FormLabel>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                  <div><RadioGroupItem value="email" /> Email</div>
                  <div><RadioGroupItem value="whatsapp" /> WhatsApp</div>
                  <div><RadioGroupItem value="phone" /> Phone Call</div>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )} />

          <FormField name="timeZone" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Your Time Zone</FormLabel>
              <FormControl><Input type="text" autoComplete="off" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField name="bestTimeToContact" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Best Time to Contact</FormLabel>
              <FormControl><Input type="text" autoComplete="off" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField name="message" control={form.control} render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" className="min-h-[120px] resize-y" autoComplete="off" {...field} />
              </FormControl>
            </FormItem>
          )} />

          <FormField name="agreement" control={form.control} render={({ field }) => (
            <FormItem>
              <label className="flex items-center gap-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                I agree to the terms and privacy policy.
              </label>
              <FormMessage />
            </FormItem>
          )} />

          <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
            {isSubmitting ? 'Sending...' : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
          </Button>
        </form>
      </Form>
    </div>
  );
}
