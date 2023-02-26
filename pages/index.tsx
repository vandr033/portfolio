import Head from 'next/head'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import {GetStaticProps, NextPage} from 'next'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import {
    Experience,
    PageInfo,
    Project,
    Skill,
    Social
} from '@/typings'
import {fetchPageInfo} from '@/utils/fetchPageInfo'
import {fetchExperiences} from '@/utils/fetchExperiences'
import {fetchSkills} from '@/utils/fetchSkills'
import {fetchProjects} from '@/utils/fetchProjects'
import {fetchSocials} from '@/utils/fetchSocials'
import {sanityClient} from "@/lib/sanity";
const inter = Inter({subsets: ['latin']})

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];

}

const Home = ({
    pageInfo,
    experiences,
    skills,
    projects,
    socials
} : Props) => {
    return (
        <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar scrollbar-thumb-[#444b1d]/40">
            <Head>
                <title>Sebastian's Portfolio</title>
            </Head>

            <Header socials={socials}/>

            <section id="Hero" className='snap-start'>
                <Hero pageInfo={pageInfo}/>

            </section>
            <section id='About' className='snap-center'>
                <About pageInfo={pageInfo}></About>
            </section>
            {/*Experience*/}
            <section id='Experience' className='snap-center'>
                <WorkExperience experiences ={experiences}></WorkExperience>
            </section>

            {/*Skills*/}
            <section id='Skills' className='snap-start '>
                <Skills skills ={skills}></Skills>
            </section>

            {/* Projects */}
            <section id='Projects' className='snap-start'>
                <Projects projects={projects}></Projects>
            </section>

            <section id='ContactMe' className='snap-start'>
                <ContactMe></ContactMe>
            </section>
            <Link href='#Hero'>
                <footer className='sticky bottom-5 w-full cursor-pointer'>
                    <div className=' flex items-center justify-center'>
                        <img className='h-10 w-10 rounded-full  hover:grayscale-0 cursor-pointer' src="https://i.ibb.co/hdW7xH1/icons8-circled-up-left-100.png" alt=""/>
                    </div>
                </footer>
            </Link>
        </div>

    );
};

export default Home;

export const getStaticProps: GetStaticProps < Props >= async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials
        },
        revalidate: 100
    }


};
