"use client";

import { useState } from "react";
import FileUpload from "@/components/FileUpload";

export default function Documents({ next, back }: any) {
  const [files, setFiles] = useState<any>({});

  const handleNext = () => {
    next(files);
  };

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">Upload Documents</h2>

      <FileUpload
        label="PAN Card"
        onChange={(file) =>
          setFiles((prev: any) => ({ ...prev, pan: file }))
        }
      />

      <FileUpload
        label="Aadhaar Card"
        onChange={(file) =>
          setFiles((prev: any) => ({ ...prev, aadhaar: file }))
        }
      />

      <FileUpload
        label="Self Photo"
        onChange={(file) =>
          setFiles((prev: any) => ({ ...prev, photo: file }))
        }
      />

      <div className="flex gap-3">
        <button onClick={back} className="btn-secondary">Back</button>
        <button onClick={handleNext} className="btn-primary">Continue</button>
      </div>

    </div>
  );
}