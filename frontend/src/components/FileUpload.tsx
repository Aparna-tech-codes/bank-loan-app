"use client";

import { useState } from "react";

export default function FileUpload({
  label,
  onChange,
}: {
  label: string;
  onChange: (file: File) => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (file: File) => {
    onChange(file);

    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="space-y-2">

      <label className="text-sm font-medium">{label}</label>

      <label className="border-2 border-dashed rounded-xl p-5 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">

        {!preview && (
          <>
            <div className="text-3xl">📷</div>
            <p className="text-sm text-gray-500 mt-2">
              Upload or Take Photo
            </p>
          </>
        )}

        {preview && (
          <img
            src={preview}
            className="h-28 object-cover rounded-lg"
          />
        )}

        <input
          type="file"
          accept="image/*,application/pdf"
          capture="environment"
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              handleFile(e.target.files[0]);
            }
          }}
        />
      </label>

    </div>
  );
}