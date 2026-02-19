import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "The Medals",
      description: "He recived three medals",
      image: "/assets/medal.png"
    },
    {
      title: "The Indian Police Medal",
      description: "The Indian Police Medal (IPM) refers to a system of gallantry and distinguished service awards for police personnel in India, primarily the President's Police Medal (PPM) for Distinguished Service and the Police Medal (PM) for Meritorious Service, alongside their gallantry counterparts (PPMG & PMG), recognizing bravery and exceptional duty, with announcements often made on Republic/Independence Days. These medals, established post-independence, honour acts of conspicuous bravery or long, dedicated service, replacing earlier colonial-era awards and continuing a tradition of recognizing police excellence.",
      image: "/assets/medal1.png"
    },
    {
      title: "The Samar Seva Star",
      description: "The Samar Seva Star 1965 is an Indian military medal awarded for service during the 1965 Indo-Pakistani War, recognizing bravery and dedication from both armed forces personnel and civilians, established in 1967 to honor those who served in the conflict. It's a bronze five-pointed star with '1965' inscribed, symbolizing service in that significant war.",
      image: "/assets/medal2.png"
    },
    {
      title: "The Sangram Medal",
      description: "The Sangram Medal (संग्राम पदक) was an Indian service medal awarded for participation in the 1971 Indo-Pakistan War (Bangladesh Liberation War), given to military, police, paramilitary, and some civilians who served in operational areas like J&K, Punjab, Gujarat, Rajasthan, etc., from Dec 3, 1971, to Dec 20, 1972, recognizing meritorious service in the conflict. It features the National Emblem on the front and a rising sun on the back, signifying service during this significant war for India and Bangladesh's independence.",
      image: "/assets/medal3.png"
    },
    {
      title: "Border Patrol 1971",
      description: "Securing the Indo-Pak border through the vast and featureless expanse of Banaskantha.",
      image: "/assets/certificate.png"
    },
    {
      title: "Post-War Recognition",
      description: "He served in the Gujarat Police for nearly thirty years. During his service, through his sharp intuition, exceptional tracking skills, and fearlessness, he helped capture many bank robbers and seized numerous smuggled weapons, gold, and silver. For this excellent performance, he was awarded a certificate of commendation by the District Police Officer.",
      image: "/assets/certificate 1 .png"
    },
    {
      title: "Eternal Memorial",
      description: "In 1965 and 1971, Veer Ranchhod Pagi provided extraordinary assistance to the Indian Army and displayed indomitable courage. In recognition of his service and to ensure that his contributions are remembered forever, the Central Government established a post named RANCHHOR DAS BOP on the India–Pakistan border. A statue of Veer Ranchhod Pagi has been installed there and is worshipped. As long as the nation of India exists, this post will remain. This is India’s first check post to be dedicated in the name of a civilian—someone who was not part of the Army—yet a post was named in his honor.",
      image: "/assets/stachyu .png"
    },
    {
      title: "News Coverage 1",
      description: "During the 1971 India–Pakistan war, three units also fought along the Kutch border. Many of our soldiers were martyred in the Kutch and Rajasthan units, but comparatively very few soldiers were martyred in the Banaskantha unit. Moreover, our forces captured territory up to Nagarparkar in Pakistan This caught the attention of the then senior military officer, Field Marshal General Manekshaw. When he inquired about the reason, the officers informed him that Ranchhod Pagi was with them. Because of this, they received all the necessary assistance.Manekshaw took special note of this and recommended Ranchhod Pagi for a Presidential Award. They shared a special friendship.",
      image: "/assets/news artical.png"
    },
    {
      title: "News Coverage 2",
      description: "Inspired by his service, the Government of Gujarat introduced the first-ever recruitment of Police Pagi in 2014. He was the first person to serve as a Pagi in the Gujarat Police, and despite being in the police department, he was granted special permission to wear traditional Rabari attire. He was allowed to wear a dhoti, a khaki shirt, and a khaki Rabari turban instead of the standard police uniform. This was perhaps the first such instance in the Gujarat Police where, despite being a Police Head Constable, he was permitted to wear a Rabari turban and dhoti in place of the police cap and trousers.",
      image: "/assets/news artical 2.png"
    },
    {
      title: "News Coverage 3",
      description: "He shared a friendship with Field Marshal General Manekshaw, who was the Chief of the Indian Army. In his final days, when Manekshaw was in the hospital, he repeatedly said, “Call Pagi… call Pagi.” At the time, the doctors did not understand what he meant. Upon further inquiry, it was discovered that even in his last moments, he was asking to call his close friend, Veer Ranchhod Pagi.",
      image: "/assets/news artical 3.png"
    },
    {
      title: "News Coverage 4",
      description: "Historical records and newspaper clippings from the 1965 war period.",
      image: "/assets/news artical 4.png"
    },
    {
      title: "Official Certificate 1",
      description: "In 2008, the state-level Independence Day (15 August) program was held in Banaskantha district. At that time, the Chief Minister, Shri Narendra Modi, visited Veer Ranchhod Pagi and honored him by presenting a certificate of appreciation. Additionally, on the following day, Police Chief Shri Harikrishna Patel invited him as the chief guest and organized a program titled “Ek Shaam Veeron Ke Naam”. The Honorable Governor also invited him for an official dinner on 14 August.",
      image: "/assets/certificate 2.png"
    },
    {
      title: "Official Certificate 2",
      description: "For his commendable service during the 1971 war, Veer Ranchhod Pagi was honored with the Police Medal by the Honorable President of India.",
      image: "/assets/certificate 3.png"
    },
    {
      title: "Official Certificate 3",
      description: "Veer Ranchhod Pagi was honored with a medal by the Honorable President of India for his service to the nation and his outstanding contributions.",
      image: "/assets/certificate 4.png"
    },
    {
      title: "Official Certificate 4",
      description: "During the 1971 war, Veer Ranchhod Pagi fought the war under the orders of BSF officer Kripalsingh. In this regard, Shri Kripalsingh stated that Veer Ranchhod Pagi’s performance was outstanding and that he possessed exceptional knowledge of the regions of both India and Pakistan.",
      image: "/assets/certificate 5.png"
    },
    {
      title: "News Coverage 6",
      description: "During the celebrations of India’s victory in the 1971 war, when the Army officers were celebrating the triumph at the Bangladesh border, Veer Ranchhod Pagi played an important role on the Banaskantha–Kutch border. Because of his contribution, Field Marshal Sam Manekshaw sent a special helicopter to Suigam to bring Pagi, and he had dinner with him.",
      image: "/assets/news artical 6.png"
    },
    {
      title: "News Coverage 7",
      description: "Veer Ranchhod Pagi’s mother, Nathibai, had taken a vow not to kill living beings. Therefore, she refused to give goats to the Pakistani army personnel. This led to an argument between them. As a result, three Pakistani soldiers came to Pagi’s house with weapons, intending to kill Ranchhod and his family.However, Pagi and Nathibai came to know about this in advance and were already prepared. They killed all three soldiers and took possession of the two guns they had. Immediately, they fled to India. These guns were deposited at the Mavsari Police Station.The case regarding the killing of the three Pakistani soldiers was tried at the Delhi embassy, and Pagi Dada was acquitted as innocent. After that, he served as the Pagi of Limbala village panchayat on an annual salary of eight annas.",
      image: "/assets/news artical 7.png"
    },
    {
      title: "News Coverage 8",
      description: "Media coverage of the Ranchordas Pagi Legacy Foundation establishment.",
      image: "/assets/news artical 8.png"
    },
    {
      title: "Income Certificate",
      description: "When he took voluntary retirement from the police department in 1992, his pension was around 500 rupees..",
      image: "/assets/income certificate .png"
    },
    {
      title: "News Coverage 9",
      description: "During the 1965 war, Pakistan advanced with the intention of capturing Kutch and succeeded in occupying Vighakot. It was crucial for our army to reach there quickly, but between Suigam and Vighakot lay a vast 100–150 km stretch of the Great Rann of Kutch, where traveling was extremely difficult.At that critical moment, the brave Ranchoḍ Pagi came to their aid. He safely guided around 800 army vehicles from Suigam–Nadabet through direct desert routes and ensured they reached Vighakot ahead of the scheduled time. He also brought back complete intelligence about the Pakistani army.As a result, our soldiers eliminated around 1,200 Pakistani troops, forcing Pakistan to retreat. Thus, Veer Ranchoḍ Pagi played a crucial and heroic role in this victory.",
      image: "/assets/news artical 9.png"
    },
    {
      title: "News Coverage 10",
      description: "He was born around 1920 in Vasarda village of Vav taluka. Due to a severe drought in their region, he migrated with his family to the then Sindh region and settled in Gadhado Pithpur.After Pakistan was formed as a new country, his village became part of Pakistan. Because of a conflict with Pakistani soldiers there, he immediately left Pakistan and came to India. He spent the rest of his life in his maternal village, Limbala.He passed away on 17 January 2013, and at that time his age would have been approximately over 100 years. He lived his life with simplicity, but accomplished something truly great.",
      image: "/assets/news artical 10.png"
    },
    {
      title: "News Coverage 11",
      description: "Veer Ranchhod Pagi passed away on 18/01/2013. As per his wish, his last rites were performed in his own field. His turban was not removed; instead, the cremation was carried out with the turban on his head.Many people from the surrounding areas attended his funeral. The Suigam Police paid their respects by giving him a Guard of Honor salute. A memorial (samadhi) was built at the site, and a monument now stands there in his memory.",
      image: "/assets/news artical 11.png"
    },
    {
      title: "News Coverage 12",
      description: "Veer Ranchhod Pagi is the pride of Banaskantha and was a true son of the nation. His absence will always be felt.",
      image: "/assets/news artical 12.png"
    },
    {
      title: "News Coverage 13",
      description: "Veer Ranchhod Pagi was forced to immediately leave his homeland in Pakistan. There, he owned nearly three hundred acres of land and a large wealth of livestock, including cows, buffaloes, bulls, camels, sheep, and goats. However, he had to abandon everything and come to India without delay.He then spent the rest of his life in Limbala. Despite the invaluable help he rendered to the nation, he never accepted any land, plot, or other benefits in return. He lived the latter part of his life in a devotional and simple manner with his family and community.Even after retirement, whenever needed, he continued to assist the police and the army. Using his pension money, he started a community kitchen (bhojanshala) at Shri Muleshwar Mahadev, Padan, built a public water stand (parab) at Limbala Patiya, and every year organized the offering of ghee sheero and hosted communal meals for Padan Brahmins and Goswamis.",
      image: "/assets/news artical 13.png"
    },
    {
      title: "News Coverage 14",
      description: "Historical news clippings preserving the memory of his service.",
      image: "/assets/news artical 14.png"
    },
    {
      title: "News Coverage 15",
      description: "Despite not being part of the army, he fought in two wars between India and Pakistan and never took any salary. He took great pride in his country and in the medals he received. Even in his retired life, he lived a simple and ordinary life. Though his stomach was not always full, he did work that made his chest swell with pride.",
      image: "/assets/news artical 15.png"
    },
    {
      title: "News Coverage 16",
      description: "At the Veer Ranchhod Pagi post located on the India–Pakistan border, permission is granted by the BSF once a year on 18 January for his family to visit. On that day, the family of Veer Ranchhod Pagi goes there to pay their respects, and BSF personnel formally present a salute to the statue of Veer Ranchhod Pagi by conducting a parade with arms.",
      image: "/assets/news artical 16.png"
    },
    {
      title: "News Coverage 17",
      description: "Veer Ranchhod Pagi, who guided the army along the Banaskantha border and delivered ammunition during active warfare at great risk to his life, had a border post established in his name. Thus, he is recognized as the country’s first civilian to have a Border Out Post named after him — RANCHHORDAS BOP.",
      image: "/assets/news artical 17.png"
    },
    {
      title: "News Coverage 18",
      description: "During the wars of 1965 and 1971, Pakistan suffered heavy losses due to the assistance provided by Veer Ranchhod Pagi to the Indian Army. As a result, the Pakistani government announced a reward of 50,000 rupees on Ranchhod Pagi’s head at that time",
      image: "/assets/news artical 18.png"
    },
    {
      title: "Official Certificate 5",
      description: "In recognition of the extraordinary service of Veer Ranchhod Pagi, he was honored by the Rotary Club of Palanpur.",
      image: "/assets/certificate 6.png"
    },
    {
      title: "Portrait of a Legend",
      description: "A visual tribute to the legendary scout Ranchordas Pagi.",
      image: "/assets/images.webp"
    },
    {
      title: "Family Legacy",
      description: "A photo of family members of Ranchordas Pagi, preserving the personal side of the legendary scout.",
      image: "/assets/family photo.jpeg"
    }
  ]

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#131614] dark:text-white transition-colors duration-200">
      <SEO 
        title="Visual Gallery"
        description="A curated visual archive of Ranchordas Pagi's life, including war medals, certificates, historical news clippings, and photographs."
        keywords="Ranchordas Pagi Photos, War Medals, Indian Army History, Historical Archive, Banaskantha History"
      />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
          <Navigation />

          <main className="flex flex-col items-center py-5">
            <div className="layout-content-container flex flex-col w-full max-w-[1200px] flex-1 px-4 md:px-10">
              {/* Breadcrumbs */}
              <nav className="flex flex-wrap gap-2 py-4">
                <Link to="/" className="text-[#6d7e74] dark:text-[#8ea397] text-sm font-medium leading-normal hover:underline">Home</Link>
                <span className="text-[#6d7e74] dark:text-[#8ea397] text-sm font-medium leading-normal">/</span>
                <span className="text-primary dark:text-white text-sm font-bold leading-normal">Official Visual Gallery</span>
              </nav>

              {/* Page Heading */}
              <div className="flex flex-col md:flex-row flex-wrap justify-between items-end gap-6 py-6 border-b border-[#dee3e0] dark:border-[#2d3630] mb-6">
                <div className="flex min-w-72 flex-col gap-3">
                  <h1 className="text-primary dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] uppercase">Official Visual Gallery</h1>
                  <p className="text-[#6d7e74] dark:text-[#8ea397] text-lg font-normal max-w-2xl leading-relaxed">
                    A curated archival collection documenting the extraordinary life and military service of the legendary Army Scout Ranchordas Pagi. These records serve as a testament to his unparalleled tracking skills and loyalty to the nation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded h-12 px-6 bg-[#f1f3f2] dark:bg-[#2d3630] text-primary dark:text-white text-sm font-bold leading-normal tracking-[0.015em] border border-[#dee3e0] dark:border-[#3a473f]">
                    <span className="material-symbols-outlined mr-2 text-lg">picture_as_pdf</span>
                    <span className="truncate uppercase">Download Archive PDF</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="pb-6">
                <h2 className="text-2xl font-black text-primary dark:text-white uppercase mb-6 tracking-tight">All Archives</h2>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
                {galleryItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group bg-white dark:bg-[#1c241f] border border-[#dee3e0] dark:border-[#2d3630] p-4 rounded shadow-sm hover:border-primary transition-all">
                    <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover rounded-sm grayscale group-hover:grayscale-0 transition-all duration-300" 
                      style={{backgroundImage: `url("${item.image}")`}} />
                    <div className="flex flex-col gap-1">
                      <p className="text-primary dark:text-white text-base font-bold leading-tight uppercase tracking-wide">{item.title}</p>
                      <p className="text-[#6d7e74] dark:text-[#8ea397] text-sm font-normal leading-snug">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="flex flex-col items-center gap-6 py-12">
                <p className="text-[#6d7e74] dark:text-[#8ea397] text-xs font-medium uppercase tracking-widest text-center">
                  © 2024 Ranchordas Pagi Memorial Archive • Dedicated to the Indian Army
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
