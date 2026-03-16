import { motion } from 'motion/react';

export default function GalleryPage() {
  const images = [
    'https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-6/506260865_1292712552854785_5667104250109438117_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=QbbiSBc9nGAQ7kNvwFHVJ2p&_nc_oc=Adn6JDvTmoEnOVOFSmQw7EP163poIAKs-HJJMxPlYtPdCeuEbNrkSMmw7qQNPR6Spos&_nc_zt=23&_nc_ht=scontent.fdac2-2.fna&_nc_gid=R3YSMPLAsuwBxt5W7jDi0w&_nc_ss=8&oh=00_AfxUE814IugoT-9NLDcRtvY9eMflcyiHLbDCluhpeuhHhQ&oe=69BCF5B4',
    'https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-6/505951620_1293657012760339_5267034984661628761_n.jpg?stp=c90.0.1110.1110a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=eX4aPHxPatYQ7kNvwHj6plv&_nc_oc=AdnVG_x5XvbeA9mSMRhRchub0zfVah-FD6mfNdEoUBPQm8tr1FIVipfVlCgff1_Pl24&_nc_zt=23&_nc_ht=scontent.fdac2-2.fna&_nc_gid=wF2XzkScDOPuk-LX7cfKyA&_nc_ss=8&oh=00_Afyc2-c6Uefabp4fGArMGgcp4oyszd5I6ZUdVGIfW_I7PQ&oe=69BD28E3',
    'https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/510991985_1303971378395569_7633122101346953048_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=c3TPsp0ScesQ7kNvwEyOCc6&_nc_oc=AdntTuG2Mi5wjR1Qr-hNccby7Q8P5K6H1yF9Wt_q0TXwTthdlqdOPxbTDTxg8oeSlRc&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=iZmJLGRO0k_pUbHiQ5yJKw&_nc_ss=8&oh=00_AfwGH6si1HKS3Ew424CcJo1CXNE8wzZObL5A0XXH5yXJ3w&oe=69BD16CA',
    'https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/502548579_1303971395062234_8772785137590363100_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=a934a8&_nc_ohc=RmVz0gshAgwQ7kNvwEOVleN&_nc_oc=AdnTz9zcpQBZafa81BvlC3_xpqBJGbyReQXSuU_OWYt5qsKLJCLgzJJrntBZ5Gw_n9U&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=iZmJLGRO0k_pUbHiQ5yJKw&_nc_ss=8&oh=00_AfxwZflOy8TTmuYW6sL01fYp0EwA1l41-9zTmqeTH7LwPw&oe=69BD0A97',
    'https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/509426296_1303971458395561_7440118205827207290_n.jpg?stp=c0.364.946.946a_cp6_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=AtOp1SCmn8kQ7kNvwE49rOV&_nc_oc=Adk3z5uOWnKSSryALVoE4zeBwO1N1L6c6rE4GguNg5NxrFPgpKFzyNCl3yn7yotIiWM&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=iZmJLGRO0k_pUbHiQ5yJKw&_nc_ss=8&oh=00_Afxe4WFIeNRVaP4rc8vG9oBXBQyTtbNUDOG7sXnVhUQMiA&oe=69BCF5B2',
    'https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-6/511987524_1303971478395559_4998798162132427581_n.jpg?stp=c256.0.1536.1536a_cp6_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=a934a8&_nc_ohc=bqpzrkvHlNIQ7kNvwGlBUOA&_nc_oc=Adl6bCo8G9XOlAE_v3EeeWc5YNEX-gbVIlDhJ3Jyk6cAe_KksWpRwqNRM-8bPLDLel4&_nc_zt=23&_nc_ht=scontent.fdac2-2.fna&_nc_gid=iZmJLGRO0k_pUbHiQ5yJKw&_nc_ss=8&oh=00_AfyjfbQeByEk0S6wrYNu7Zt2y--QShlZPybkF6tDui0O1w&oe=69BD1C4B',
    'https://scontent.fdac2-2.fna.fbcdn.net/v/t39.30808-6/532429545_1349890853803621_17947456968011896_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=5df8b4&_nc_ohc=Us7gGai2SHkQ7kNvwFgNfXC&_nc_oc=Adl1-aAC2ps3Ce_68_A22t25X6RpAUiSu0LgYk1t6ItJ7Di6-zJUeA6FcgdAybPqfJo&_nc_zt=23&_nc_ht=scontent.fdac2-2.fna&_nc_gid=rq8dvP9BIugGY4xqZxe-ZA&_nc_ss=8&oh=00_Afz8bNq27ivud7Mp4G_vZuua-BKtCSCqff0hGYCKgUCOvw&oe=69BCF5FD',
    'https://scontent.fdac2-1.fna.fbcdn.net/v/t39.30808-6/538584213_1362652802527426_36844735517373004_n.jpg?stp=c168.0.954.954a_cp6_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=a934a8&_nc_ohc=L0S_v_3h6OEQ7kNvwFGieOy&_nc_oc=AdlI1PwzrwPsGfitSRt2st5wtv112N5U3gEYj61PQyQEi3UCo2k79UHB3R31qBt4iLk&_nc_zt=23&_nc_ht=scontent.fdac2-1.fna&_nc_gid=rq8dvP9BIugGY4xqZxe-ZA&_nc_ss=8&oh=00_AfxbrcOcStDuQN0ZSv7nCTV7JjyZ-Du30AqJGZ18vgP39g&oe=69BD1C96',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/487919510_1229570632502311_803294126575777173_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzI3MTA2MTMxNzE4MjEwNzAyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY2NXg4MzIuc2RyLkMzIn0%3D&_nc_ohc=xAwYR-9Y8MUQ7kNvwH3zz4z&_nc_oc=AdlOmcSthGRBCZyMmyjFNqgWgMXr_tZWmeuNDStSVM-IRiWFb4nsYCAE0F1QUd7nLLs&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=vmMrCNPsmD70TbQ7PlXHmw&_nc_ss=8&oh=00_AfxvMA8y9gNHbpq9LcreO1pZrIFzk_5_yV2JNV_x1KA1Tg&oe=69BCF4AA',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/497913381_882984327341538_3224626959764450893_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=MzEyNzk3MjY1MDE3MjAwOTQ5OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjYxMngxMDg2LnNkci5DMyJ9&_nc_ohc=pfqX112FcS8Q7kNvwH-uSVc&_nc_oc=AdmHqGXZZuGEJ-q-l5hmIlegUsqu9lnuweCQPuheBvwXy1IBXTdWabxtiiyHr1DuUyw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=pLiTxK5RJjqJtWFUJY3xYA&_nc_ss=8&oh=00_AfxK2WjeZVy8nui3KHyaD6tuu3Z8ipa5BvVCLWyJHV4QvQ&oe=69BCEED4',
    'https://instagram.fdac2-1.fna.fbcdn.net/v/t51.71878-15/503066281_1711734396130277_918731491643987105_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=100&ig_cache_key=MzEyNzk2NzE5MTc2OTY1Mjk5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjcyMHgxMjgwLnNkci5DMyJ9&_nc_ohc=k6DYhjIk7RIQ7kNvwFhR15V&_nc_oc=Adnjqglfw7S7Q6I-ySnlDhWG_VJgHMrzwa1aWPZsuacCQB3V5xjvlOsg6BR9uDXff1s&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-1.fna&_nc_gid=pLiTxK5RJjqJtWFUJY3xYA&_nc_ss=8&oh=00_AfwiRK64dYD6E-Tn3xrAe7U_vjuBL-ZROICtBoH8TFRBVg&oe=69BCF718',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/485770849_1218563713603003_4666783340197867584_n.jpg?stp=cp6_dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzExMjkyMzUzODA4MDM4NDM2Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY2NXg4MzMuc2RyLkMzIn0%3D&_nc_ohc=K_Jd6MxBtpIQ7kNvwEfyAIM&_nc_oc=Adny2OKqSkZIWUVtDCu2wVwfC31k-AibqkTroJ4z_AyYIrX5PstTC_96tSpJmbARUdQ&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfxAQ616hMip1Kr_mZ2r0Wh467KhiKlfGoCMlMPQT7zcxw&oe=69BCFAE2',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t51.71878-15/500035312_1321671822235046_6269560733391407486_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzExMjkyNDc4OTI1ODE2OTAxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=FcW7M0AtEDgQ7kNvwHvmT7F&_nc_oc=Adkkgq0aumI501sXZ1St41ua-jyVNrTDA5ThIgLxsFYWssFPQueE7o_NEjhA3lx6efw&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfyncPoVSry7bINgFT5ce0wDSCCtH0mxaSnFHjJn9VKPjA&oe=69BCFFFA',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/484508012_1215724673886907_4083255862637308941_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=101&ig_cache_key=MzA4NzY2ODIxMDc0NTE2OTA4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=E2kGhnfHYeMQ7kNvwEjDjEN&_nc_oc=Adl0RjgmDXvgyVPs6gTdfWX-JK7Tp9xhVNrEfF0ru8Oi75PhUxLm4-yRdyrzPbnbfdg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_AfytcLYIngwVvfX7tPvpc_FlJwnCl3t6b_BBQw0AH4qUCw&oe=69BD15DC',
    'https://instagram.fdac2-2.fna.fbcdn.net/v/t39.30808-6/485188341_1216593160466725_1007189197509179799_n.jpg?stp=c0.0.1440.1079a_cp6_dst-jpg_e35_s1080x1080_tt6&_nc_cat=103&ig_cache_key=MzA5NDEwMjMwNzg2ODU1MDIwOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTA4MC5zZHIuQzMifQ%3D%3D&_nc_ohc=0mfUT8tqcDcQ7kNvwGD8oLf&_nc_oc=AdlZfXLWOKI01D6tSlxCMHE1pM5RzBp3WeHixytD-yAw_fmoTTzDGdRDSpwIhs0Jopg&_nc_ad=z-m&_nc_cid=1112&_nc_zt=23&_nc_ht=instagram.fdac2-2.fna&_nc_gid=-4_eNL-9aEW4QWl_Ff-v5Q&_nc_ss=8&oh=00_Afy8O12N3KsAA0xV7pghOgcMz7Bi4iG26WU-WVLurV94AQ&oe=69BD0CEB'
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-stone-900 mb-6">Our Work</h1>
          <p className="text-xl text-stone-600 font-light">
            Browse through some of our recent landscaping and lawn care projects in Hammond and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-[2rem] overflow-hidden aspect-square bg-stone-200"
            >
              <img
                src={src}
                alt={`Project ${index + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
