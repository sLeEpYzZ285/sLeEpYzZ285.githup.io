"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Selection,  // Add this import
} from "@nextui-org/react";
// Update the import statement
// import { gallery_categoried } from "../ProductFilter/index";
// Remove the import for gallery_categories and add this constant
const gallery_categories = [
  {
    key: "study",
    text: "การศึกษา",
  },
  {
    key: "society",
    text: "สังคม",
  },
  {
    key: "donation",
    text: "การบริจาค",
  },
];

interface GalleryFilterProps {
  onFilterChange: (selectedKeys: Set<string>) => void;
}

export default function GalleryFilter({ onFilterChange }: GalleryFilterProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const handleSelectionChange = (keys: Selection) => {
    setSelectedKeys(keys);
    if (keys instanceof Set) {
      if (keys.size === 0) {
        onFilterChange(new Set([]));
      } else {
        // Convert keys to Set<string> explicitly
        onFilterChange(new Set(Array.from(keys) as string[]));
      }
    }
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize"
        >
          {selectedKeys instanceof Set && selectedKeys.size > 0
            ? Array.from(selectedKeys).join(", ")
            : "เลือกประเภท"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Gallery Categories"
        variant="flat"
        closeOnSelect={false}
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={handleSelectionChange}
      >
        {gallery_categories.map((category) => (
          <DropdownItem 
            key={category.key}
            className="text-foreground"
          >
            {category.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}