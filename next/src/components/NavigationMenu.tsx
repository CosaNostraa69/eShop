"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "All products",
    href: "/api/products",
    description: "Take a look at everything we have for you.",
  },
  {
    title: "Cigarettes",
    href: "/api/products?type=Cigarettes",
    description: "Buy our best cigarettes. We got everything you might want.",
  },
  {
    title: "Newspapers",
    href: "/api/products?type=Journaux et magazines",
    description:
      "Get the latest news from our selection of world-popular newspapers.",
  },
  {
    title: "Sweets",
    href: "/api/products?type=Gâteaux et bonbons",
    description:
      "It might be for your kids or for you... We don't care! Just enjoy the sweets we got. ",
  },
  {
    title: "Drinks",
    href: "/api/products?type=Boissons",
    description: "Discover our drinks. Soda? Vodka? Water? We got you.",
  },
  {
    title: "Other",
    href: "/api/products?type=Objets divers liés au tabac",
    description:
      "We also have a lot of other stuff. The type of stuff you would come to a grocery store",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="invisible sm:visible">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about-us"
            className={navigationMenuTriggerStyle()}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className={navigationMenuTriggerStyle()}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
