"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import SortButton from "./SortButton";
import TypeButton from "./TypeButton";


// Product types for shop
const product_type = [
  {
    key: "nootebook",
    text: "Notebook",
  },

  {
    key: "computer",
    text: "คอมพิวเตอร์",
  },
  {
    key: "mornitor",
    text: "จอคอม",
  },
  {
    key: "printer",
    text: "ปริ้นเตอร์",
  },
];

// New gallery categories
// Make sure to export this constant
export const gallery_categories = [
  {
    key: "event",
    text: "กิจกรรมพิเศษ",
  },
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
  {
    key: "volunteer",
    text: "จิตอาสา",
  }
];

interface ProductFilterProps {
  onFilterChange: (selectedKeys: Set<string>) => void;
  onSortChange: (sortKey: string) => void;
}

export default function ProductFilter({ onFilterChange, onSortChange }: ProductFilterProps) {
  return (
    <>
      <div className="flex gap-6">
        <SortButton onSortChange={onSortChange} />
        <TypeButton onFilterChange={onFilterChange} />
      </div>
    </>
  );
}
