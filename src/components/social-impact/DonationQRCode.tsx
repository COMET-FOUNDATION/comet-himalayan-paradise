import Image from "next/image";

export function DonationQRCode() {
  return (
    <section
      aria-labelledby="social-cause-donation-heading"
      className="bg-stone-50 px-4 py-10 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-4xl rounded-3xl border border-green-900/10 bg-white px-5 py-8 text-center shadow-sm sm:px-10 sm:py-10">
        <h2
          id="social-cause-donation-heading"
          className="text-xs font-bold uppercase tracking-[0.22em] text-green-800 sm:text-sm"
        >
          Support This Social Cause
        </h2>
        <p className="mt-3 text-base font-medium leading-7 text-slate-700 sm:text-lg">
          Scan here to donate for this social cause.
        </p>
        <div className="mx-auto mt-6 flex w-full max-w-[280px] items-center justify-center rounded-2xl border border-stone-200 bg-white p-3 sm:mt-8 sm:max-w-[320px] sm:p-4">
          <Image
            src="https://gmnnifngyjjksorcziow.supabase.co/storage/v1/object/public/images/homepage/e0347372-065b-4993-8cd7-7c7a8f426567-comet-qr.jpeg"
            alt="Comet donation QR code"
            width={300}
            height={300}
            className="h-auto w-full max-w-[280px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
