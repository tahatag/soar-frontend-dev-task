"use client";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { editProfileFormSchema } from "@/lib/validation";
import PenIcon from "./icons/pen.svg";
import ChevronDownIcon from "./icons/chevron-down.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

export const EditProfileForm = ({
  initialValues,
  onSubmit,
}: {
  initialValues?: Partial<z.infer<typeof editProfileFormSchema>>;
  onSubmit: (values: z.infer<typeof editProfileFormSchema>) => void;
}) => {
  const form = useForm<z.infer<typeof editProfileFormSchema>>({
    resolver: zodResolver(editProfileFormSchema),
    defaultValues: {
      profile_picture: "",
      name: "",
      username: "",
      email: "",
      password: "",
      present_address: "",
      permanent_address: "",
      city: "",
      postal_code: "",
      country: "",
      dob: undefined,
      ...initialValues,
    },
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<
      z.infer<typeof editProfileFormSchema>,
      "profile_picture"
    >
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should not exceed 5MB.");
        return;
      }

      const validFormats = ["image/png", "image/jpg", "image/jpeg"];
      if (!validFormats.includes(file.type)) {
        toast.error("Only PNG, JPG, or JPEG files are allowed.");
        return;
      }

      field.onChange(URL.createObjectURL(file));
    }
  };

  const formatDoB = (date: Date | string) => {
    const selectedDate = new Date(date);

    return format(selectedDate, "dd MMMM y");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4 md:space-y-10 flex flex-col items-end"
      >
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="mb-5 md:mb-0 md:ml-[30px] md:mr-[60px]">
            <div className="cursor-pointer relative rounded-full min-w-[100px] w-[100px] h-[100px] md:min-w-[90px] md:w-[90px] md:h-[90px] md:ml-[5px]">
              <FormField
                control={form.control}
                name="profile_picture"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="profile_picture"
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        onChange={(e) => handleFileChange(e, field)}
                        hidden
                        className="hidden"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Image
                fill
                src={
                  !!form.getValues("profile_picture")
                    ? (form.getValues("profile_picture") as string)
                    : "/pfp-placeholder.png"
                }
                alt="Profile Picture"
                className="object-cover !relative rounded-full hover:brightness-75"
                onClick={() =>
                  document.getElementById("profile_picture")?.click()
                }
              />
              <div className="absolute right-0 bottom-0 rounded-full w-[30px] h-[30px] bg-primary flex justify-center items-center">
                <PenIcon />
              </div>
              <FormField
                control={form.control}
                name="profile_picture"
                render={() => <FormMessage className="mt-4" />}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col w-full space-y-4 md:space-y-[22px]">
            <div className="grid grid-cols-2 gap-4 md:gap-[30px] col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="Charlene Reed"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      User Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="Charlene Reed"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-[30px] col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="charlenereed@gmail.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        type="password"
                        placeholder="**********"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-[30px] col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <div className="relative cursor-pointer">
                            <Input
                              className="px-[15px] md:px-5 text-left cursor-pointer"
                              placeholder="25 January 1990"
                              value={field.value ? formatDoB(field.value) : ""}
                              readOnly
                            />
                            <ChevronDownIcon className="absolute right-[15px] md:right-[20px] bottom-[17px] md:bottom-[22px] text-text-secondary" />
                          </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => field.onChange(date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="present_address"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Present Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="San Jose, California, USA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-[30px] col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="permanent_address"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Permanent Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="San Jose, California, USA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      City
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="San Jose"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-[30px] col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="postal_code"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Postal Code
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="45962"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="col-span-2 md:col-span-1">
                    <FormLabel className="font-normal text-[13px] md:text-base">
                      Country
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-[15px] md:px-5"
                        placeholder="USA"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <Button type="submit" size="xl" className="w-full md:w-auto">
          Save
        </Button>
      </form>
    </Form>
  );
};
