import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga";
export default function Example() {
  useEffect(() => {
    window.scroll(0, 0);
    ReactGA.pageview(window.location.pathname + window.location.search);
    //eslint-disable-next-line
  }, []);
  return (
    <div className='py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden'>
      <div className='max-w-max lg:max-w-7xl mx-auto'>
        <div className='relative z-10 mb-8 md:mb-2 md:px-6'>
          <div className='text-base max-w-prose lg:max-w-none'>
            <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
              Legal &amp; Privacy
            </h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Disclaimer
            </p>
          </div>
        </div>
        <div className='relative'>
          <svg
            className='hidden md:block absolute top-0 right-0 -mt-20 -mr-20'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='95e8f2de-6d30-4b7e-8159-f791729db21b'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#95e8f2de-6d30-4b7e-8159-f791729db21b)'
            />
          </svg>
          <svg
            className='hidden md:block absolute bottom-0 left-0 -mb-20 -ml-20'
            width={404}
            height={384}
            fill='none'
            viewBox='0 0 404 384'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='7a00fe67-0343-4a3c-8e81-c145097a3ce0'
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits='userSpaceOnUse'
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className='text-gray-200'
                  fill='currentColor'
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill='url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)'
            />
          </svg>
          <div className='relative md:bg-white md:p-6'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
              <div className='prose prose-indigo prose-lg text-gray-500 lg:max-w-none'>
                <p>
                  Thank you for visiting our Web Site ("Site"). YOU SHOULD READ
                  THE FOLLOWING TERMS CAREFULLY BEFORE USING THIS SITE. Your use
                  of this Site is governed by the following terms of use
                  ("Terms"). If you do not agree with all of these Terms, please
                  refrain from using this Site. By using this Site, you agree to
                  comply with, and to be bound by, these Terms. Nonpareil
                  Collection may, from time to time, change these Terms in its
                  sole discretion. By using this Site after any such change, you
                  agree to comply with, and to be bound by, the Terms as
                  changed. This Site as a whole, and all material on this Site,
                  is protected by copyright, trademark, and other intellectual
                  property rights.
                </p>
                <p>
                  All materials on this Web Site (the "Site"), and the Site
                  itself, are subject to protection by international
                  intellectual property laws, including, but not limited to,
                  rights in the nature of patents, copyrights, trade secrets,
                  trade names, trademarks, service marks, moral rights, know-how
                  and any similar rights recognized under laws or international
                  conventions in any country or jurisdiction in the world.
                </p>
                <p>
                  This website, its text, designs, graphics, arrangement, and
                  compilation of data is the copyright of Nonpareil Collection
                  or its subsidiaries or affiliates and or ateliers or
                  designers, or used with permission of their owners. Such
                  materials include, but are not limited to, the photographs,
                  images, illustrations, text, video clips, audio clips,
                  designs, logos, trademarks and other materials contained in
                  this Site, as well as the software used in the design and
                  development of this Site (collectively, “Content”).
                </p>
                <p>
                  The name and trademark Nonpareil Collection, any logos and all
                  other Nonpareil Collection related marks depicted in this
                  Site, whether registered or unregistered, are trademarks or
                  service marks of Nonpareil Collection. Neither the website,
                  nor any part of it may be reproduced, adapted, stored in a
                  data storage or retrieval system or transmitted in any form or
                  by any means without the prior written permission of Nonpareil
                  Collection. Products and services that appear on this website
                  may be trademarks and/or registered trademarks of their
                  respective owners.
                </p>
                <p>
                  Any images contained within the website
                  http://www.nonpareil-collection.com.au are the property of
                  Nonpareil Collection and or their respective designers and or
                  ateliers and may not be manufactured, reproduced or copied in
                  any way whatsoever without the written formal permission of
                  Nonpareil Collection. Any finished product based on the
                  original designs will be considered to be the property of
                  Nonpareil Collection and or their respective designers and or
                  ateliers.
                </p>
                <p>
                  Copyright owners have the exclusive statutory right to
                  exercise control over copying and other exploitation of the
                  works. Nonpareil Collection takes infringement of copyright
                  law extremely seriously and therefore we state for the record,
                  clarity and avoidance of doubt our statutory right to exercise
                  control over copying and other exploitation of the works
                  displayed, therefore pursuing those infringing our work and
                  the work of our designers and ateliers under international and
                  regional agreements including but not limited to the Berne
                  Convention and the European copyright directives
                  (International copyright law, Berne Convention for the
                  Protection of Literary and Artistic Works, European copyright
                  law, Agreement on Trade-Related Aspects of Intellectual
                  Property Rights - TRIPS- and the Anti-Counterfeiting Trade
                  Agreement - ACTA-).
                </p>
                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Submissions
                </h2>
                <p>
                  You agree that any and all comments, messages, postings, data,
                  suggestions, creative ideas, designs, concepts, product
                  suggestions and other items or materials disclosed, submitted
                  or offered to Nonpareil Collection through or in connection
                  with this Site ("Submissions"), including, but not limited to,
                  survey responses, shall be treated as non-confidential and not
                  proprietary and shall become, and remain, Nonpareil Collection
                  property. Such disclosure, submission or offer of any
                  Submission shall constitute an assignment to Nonpareil
                  Collection of all rights, title and interests in all
                  copyrights and other rights in the Submission. Nonpareil
                  Collection is, and shall be, under no obligation (i) to
                  maintain any Submission in confidence; (ii) to pay to anyone
                  any compensation for or in connection with the use of any
                  Submission; or (iii) to respond to any Submission. You
                  represent and warrant that no Submission by you will violate
                  any right of any third party, including, but not limited to,
                  copyright, trademark, patent, trade secret, privacy or other
                  personal or proprietary right. By making any Submission
                  through, in connection with or related to this Site, you agree
                  that Nonpareil Collection has the right (but not the
                  obligation) to copy, publish, distribute or use such
                  Submission, or any part or parts thereof, for any purpose,
                  including, but not limited to, advertising, promotional,
                  product development or other commercial purposes, without
                  compensation to you or to any other person. Nonpareil
                  Collection does not, cannot and does not agree to consider or
                  review every Submission, and is not liable or responsible for
                  the content of any material posted on this Site by users. You
                  agree not to upload, post, distribute or otherwise publish on
                  this Site any material that (i) is libellous, defamatory,
                  obscene, abusive, pornographic, threatening or an invasion of
                  privacy; (ii) infringes the intellectual property rights,
                  including, but not limited to, any copyright, patent, trade
                  secret or trademarks, of any person or entity; (iii) is
                  illegal in any way or advocates illegal activity; or (iv)
                  advertises or solicits funds, goods or services. You are and
                  shall remain solely responsible for the content of any
                  Submission you make.
                </p>

                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Links
                </h2>
                <p>
                  This Site may contain links to other sites. Nonpareil
                  Collection is not responsible for the availability of, or any
                  content or material contained in, or obtained through, any
                  such sites. Any link to another site, and reference to
                  third-party information, products or services linked to this
                  Site, is not, and should not be construed as, an express or
                  implied endorsement by Nonpareil Collection. Any questions or
                  comments relating to such other sites should be addressed to
                  the operator or operators of those sites.
                </p>

                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Products
                </h2>

                <p>
                  The Nonpareil Collection products depicted in this Site are
                  representative of the Nonpareil Collection collective
                  collection and those of their designers and or ateliers. Not
                  all products of the Nonpareil Collection’s range of
                  collections are shown on this Site. The style, designs and
                  colours of these collections and other products shown in this
                  Site may be changed without notice. We have made every effort
                  to display accurately the colour of the products depicted on
                  this Site. However, we cannot guarantee that the actual
                  colours displayed on your monitor are accurate. Disclaimer on
                  images of products on Nonpareil Collection website and or
                  'indicative' finish samples: Wood finishes and or samples.-
                  The samples provided or presented are 'indicative' samples.
                  Variations may occur. The samples provided (physical samples
                  or images) are illustrative of the finish as per image or
                  physical sample. The finish on the illustration/image on
                  Nonpareil Collection’s website and or images provided to the
                  client and or physical sample is an indicative finish, as we
                  are dealing with a natural material and a hand finish. The
                  figuration and grain of the wood represented on a particular
                  illustration or wood sample presented or provided are
                  characteristic of the particular wood sample (grain or
                  figuration of the particular part of the wood or tree) used at
                  that specific time of the production of the piece pictured /
                  illustrated. Variations may occur as we are dealing with a
                  natural material and a made to order piece finished by hand.
                  Please kindly note that the final product may vary in tone and
                  grain pattern due to the nature of the wood itself. The colour
                  used are our (ateliers) own production and therefore may vary
                  from time to time due to environmental factors such as heat,
                  light, humility, auxiliary shinning materials, so on and so
                  forth. We may therefore be unable to reproduce the same
                  colours perfectly every time. Client's own colour wood samples
                  are understood as colour 'indication' only. Leather finishes
                  and or samples.- The samples provided or presented are
                  'indicative' samples. Variations may occur. The samples
                  provided (physical samples or images) are illustrative of the
                  finish as per image or physical sample. The finish on the
                  illustration/image on Nonpareil Collection’s website and or
                  images provided to the client and or physical sample is an
                  indicative finish, as we are dealing with a natural material
                  and a hand finish. The figuration/pattern and colour/hue of
                  the leather represented on a particular illustration or
                  leather sample presented or provided are characteristic of the
                  particular sample used at that specific time of the production
                  of the leather pictured / illustrated and or provided.
                  Variations may occur as we are dealing with a natural material
                  and a made to order leather finished by hand. The leathers are
                  specially produced in the purest tradition to bring out the
                  natural leather characteristics such as streaks, contrasting
                  shades and slight imperfections in the grain.
                </p>
              </div>
              <div className='mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0'>
                <p>
                  Other characteristics such as the leather’s vulnerability to
                  scratching, the colour solidity and the lightening that may
                  occur in the major traction points should be considered
                  qualities and not defects. They are basic components of the
                  living leather. Velvet and or upholstery fabrics of 'delicate'
                  nature and or composition.- Our disclaimer below follows
                  instructions and standard terms and conditions (policies)
                  stated by all fabric houses, related to general technical
                  information, in relation to delicate fabrics (delicate nature
                  due to the composition and or delicate pile of the fabric).
                  This may be relevant to the client's order with Nonpareil
                  Collection, if and when the client selects upholstery of
                  pieces of furniture from our collection in a ‘delicate’
                  fabric. During transportation and despite the special care
                  taken during packing or general transportation of the fabric,
                  some crushing or shine may appear on the velvet and or fabrics
                  of this genre (delicate fabrics) and therefore the fabric
                  should not be considered as damaged (either by the process of
                  upholstery or damaged during transit and or the handling of
                  the furniture pieces). We also understand from fabric houses
                  specialising in velvets and delicate fabrics of this and or
                  similar genre that once a piece of furniture has been
                  upholstered with a velvet (any velvets) and or a similar genre
                  of fabrics it may show a little variation which should be
                  considered as normal and will disappear with time. When using
                  a velvet or chenille and or a ’delicate nature’ fabric of this
                  genre as upholstery, humidity, temperature and pressure may
                  cause an irregular shading due to the slight differences in
                  the angle of the pile. This may give rise to slight changes in
                  appearances which are not, however, an indication of the
                  fabric being damaged. Nonpareil Collection and their
                  production teams (manufacturers) and shippers will take the
                  outmost care when handling delicate fabrics during the process
                  of upholstery and during the process of packing and transport
                  of the furniture pieces in question. Nonpareil Collection and
                  or their appointed shippers or representatives will take no
                  responsibility for the natural and delicate nature of such
                  fabrics (velvets, chenilles, silks and or any fabric of
                  ‘delicate‘ nature due to its composition and or pile), which
                  by nature of their construction and composition have a
                  tendency to mark and dent extremely easily. Therefore the
                  client accepts full responsibility for the nature and the
                  natural consequences of this fabric selection.
                </p>
                <p>
                  Material in this Site may contain inaccuracies or
                  typographical errors. Nonpareil Collection shall not be liable
                  or responsible for any loss or damage caused by or arising
                  from any user's reliance on information obtained from or
                  through this Site. It is your responsibility to evaluate the
                  information and other content available through this Site.
                  This Site and the information and materials contained in this
                  Site are subject to change at any time, and from time to time,
                  without prior or subsequent notice. No Warranties THIS SITE
                  AND THE CONTENTS OF THIS SITE ARE PROVIDED ON AN "AS IS" BASIS
                  WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  NONPAREIL COLLECTION DOES NOT REPRESENT OR WARRANT THAT THIS
                  SITE IS FREE OF DEFECTS OR THAT ANY DEFECTS WILL BE REMEDIED.
                  YOU AGREE, BY USING THIS SITE, THAT YOUR USE OF THIS SITE IS
                  AT YOUR SOLE RISK, THAT YOU ASSUME FULL RESPONSIBILITY FOR ALL
                  LOSS OF USE, LOSS OF DATA AND COSTS ASSOCIATED WITH ALL
                  NECESSARY SERVICING OR REPAIRS OF ANY EQUIPMENT AND/OR
                  SOFTWARE THAT YOU USE IN CONNECTION WITH THIS SITE, AND THAT
                  NONPAREIL COLLECTION SHALL NOT BE RESPONSIBLE OR LIABLE FOR
                  ANY DAMAGES OF ANY KIND WHATSOEVER ARISING OUT OF, CAUSED BY
                  OR RELATED TO YOUR USE OF THIS SITE. WHERE APPLICABLE LAW DOES
                  NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SOME OR ALL OF
                  THE FOREGOING DISCLAIMERS OF WARRANTY MAY NOT APPLY TO YOU.
                </p>

                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Indemnity
                </h2>
                <p>
                  You agree to defend, indemnify and hold harmless Nonpareil
                  Collection, its affiliates and their officers, directors,
                  employees and shareholders from and against any and all
                  claims, damages, losses, costs and expenses, including, but
                  not limited to, reasonable attorneys' fees and court costs,
                  arising from or related to your use of this Site.
                </p>
                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Miscellaneous
                </h2>
                <p>
                  These Terms and your use of this Site shall be governed under
                  the laws of Australia, without regard to its conflict of law
                  principles. Any dispute arising under these Terms or out of
                  your use of this Site shall be exclusively resolved by the
                  official courts located in Australia, Victoria. By using this
                  Site, you hereby agree to the personal jurisdiction of, and
                  venue in, such courts.
                </p>
                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Termination
                </h2>
                <p>
                  This Agreement is effective unless and until terminated by
                  either you or Nonpareil Collection, which termination may
                  occur at any time. If Nonpareil Collection determines, in its
                  sole discretion, that you fail to comply with any of the terms
                  or provisions of this Agreement, Nonpareil Collection may
                  terminate this Agreement immediately and without notice. Upon
                  any termination of this Agreement by either you or Nonpareil
                  Collection, you must promptly destroy all materials downloaded
                  or otherwise obtained from this Site, as well as all copies of
                  such materials, whether made under the terms of this Agreement
                  or otherwise.
                </p>
                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Privacy Policy
                </h2>
                <p>
                  This website is managed by Nonpareil Collection. Nonpareil
                  Collection recognises the importance of protecting the privacy
                  of personal and financial information. We have instituted
                  reasonable policies and security measures to protect the
                  information you provide to us and by providing us with your
                  data you give us your consent to process and use such
                  submitted personal data in accordance with this privacy
                  policy. If you give us your personal information then with
                  your consent Nonpareil Collection will use this information to
                  keep you informed of our special events or promotions, to
                  register you with our website, to administer our website
                  services, and/or to process any orders you may place.
                  Otherwise, we may use the information you provide to us only
                  to review our performance and to improve our services to you,
                  or to communicate with you about your order and or to send you
                  announcements or communications by email. Nonpareil Collection
                  does not sell, rent or disclose our client's names, addresses,
                  email addresses or other personal information to third
                  parties, unless we are required to do so by law or in
                  connection with a legal claim or proceedings. If Nonpareil
                  Collection is acquired by another entity or is merged or
                  consolidated, information about Nonpareil Collection customers
                  may be made available to the new entity. However, the new
                  entity will agree to protect the confidentiality of your
                  personal information consistent with this Privacy Policy.
                </p>
                <h2 className='leading-6 text-yellow-600 font-semibold tracking-wide uppercase'>
                  Security
                </h2>
                <p>
                  Nonpareil Collection uses appropriate security measures to
                  protect the information you provide to us. However, while we
                  take reasonable steps to protect this personal information
                  from unauthorized access, use or disclosure, you accept that
                  no Internet data transmission can be guaranteed to be secure
                  from access by unintended recipients and will not hold us
                  responsible for any breach of security unless this breach is
                  due to our negligence. Acceptance of Privacy Policy and
                  Modifications By accessing and using the Nonpareil Collection
                  website (including purchasing items), or by submitting your
                  details online, you consent to our collection, use and
                  disclosure of your information as described in this privacy
                  policy. Nonpareil Collection reserves the right occasionally
                  to make changes to our privacy policy or practices. We will
                  post the updated policy on our website, and thus we encourage
                  you to review this page from time to time. If you are
                  registered with us and would like to delete your registration
                  and personal details from our database, please do so by email
                  at enquiries@nonpareilcollection.com.au
                </p>
              </div>
            </div>
            <div className='mt-8 inline-flex rounded-md shadow'>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 1.05,
                }}
              >
                <Link
                  to='/contact_us'
                  style={{
                    border: "1px solid #332C2C",
                    color: "#EDD3A7",
                    background: "#0D0D0D",
                  }}
                  className=' bg-black border-transparent mt-14 flex py-4 px-8 text-base font-lg text-white  hover:bg-gray-900 shadow-xl'
                >
                  Contact representative{" "}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
