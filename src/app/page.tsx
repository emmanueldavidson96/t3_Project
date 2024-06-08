import Image from "next/image";
import Link from "next/link";

const mock_url = [
  "https://utfs.io/f/c4825d47-7392-4014-a19d-1a30cc8206b4-pikfsb.jpg",
  "https://utfs.io/f/e3035369-81e2-4d2e-87d6-f99228dae961-2a.jpg",
  "https://utfs.io/f/6c11a270-4ced-4be0-9bc8-6f87ec9d9174-vfytzr.jpg",
  "https://utfs.io/f/413e5c3a-3de3-4a07-b531-edc8acaed28a-won7xi.jpg",
  "https://utfs.io/f/fc64864f-36b4-4c81-a06c-def13d2b23e7-ygnldw.png",
  "https://utfs.io/f/549f9fcf-84d3-4904-b37f-d46d5db7ef5c-5102t6.png",
  "https://utfs.io/f/5f71ce4b-d23a-4802-a351-7ae253c234e3-87p4ur.png",
  "https://utfs.io/f/a7a99bb4-242d-4746-a60b-90a3411fdca3-mgpo97.jpg",
  "https://utfs.io/f/ab4555d5-a22e-4532-b9b9-694b16376649-dwgfgr.jpg",
  "https://utfs.io/f/abfbf518-e7aa-4ad8-86b6-892a58adfa4d-pmcl5s.jpg"
]

const mockImages = mock_url.map((url, index) => ({
  id:index+1,
  url: url
}) )


export default function HomePage() {
  return (
    <main className="">
     <div className="flex flex-wrap">
      {
        mockImages.map((image) => {
          return (
            <div key={image.id} className="w-1/3 p-4 overflow-hidden">
              <img src={image.url} alt="" className="w-full h-full"/>
            </div>
          )
        })
      }

     </div>
    </main>
  );
}
 