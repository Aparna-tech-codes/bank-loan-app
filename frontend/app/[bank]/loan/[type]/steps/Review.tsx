"use client";

export default function Review({ data, submit, edit }: any) {

  console.log("REVIEW DATA:", data);
  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">Review Application</h2>

      {/* PERSONAL */}
      <Section title="Personal Info" onEdit={() => edit(0)}>
        <p>Name: {data.name}</p>
        <p>DOB: {data.dob}</p>
        <p>Email: {data.email}</p>
        <p>Mobile: {data.mobile}</p>
        <p>Permanent Address: {data.permanentAddress}</p>
          <p>Current Address: {data.currentAddress}</p>
      </Section>

      {/* EMPLOYMENT */}
      <Section title="Employment" onEdit={() => edit(1)}>
        <p>Type: {data.type}</p>
        <p>Company: {data.company || data.businessName}</p>
        <p>Income: {data.income || data.turnover}</p>
         <p>File: {data.income || data.turnover}</p>
      </Section>

      {/* DOCUMENTS */}
      <Section title="Documents" onEdit={() => edit(2)}>
        <div className="flex gap-3 flex-wrap">
          {Object.values(data).map((val: any, i) => {
            if (val instanceof File) {
              return (
                <img
                  key={i}
                  src={URL.createObjectURL(val)}
                  className="w-20 h-20 rounded object-cover"
                />
              );
            }
          })}
        </div>
      </Section>

      <button
        onClick={submit}
        className="w-full bg-green-600 text-white py-3 rounded-xl"
      >
        Submit Application
      </button>

    </div>
  );
}

function Section({ title, children, onEdit }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow relative">

      <button
        onClick={onEdit}
        className="absolute right-4 top-4 text-blue-600 text-sm"
      >
        Edit
      </button>

      <h3 className="font-semibold mb-2">{title}</h3>
      {children}
    </div>
  );
}