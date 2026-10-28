"use client";

export default function BuggyPage() {
  function handleClick() {
    alert("مبروك! الزرار اشتغل وكسبت أول 10 دولار 💵");
  }

  return (
    <div dir="rtl" className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl text-white mb-4">موقع العميل (بعد التصليح)</h1>
        <button onClick={handleClick} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition">
          صلحني واضغط عليا
        </button>
      </div>
    </div>
  );
}