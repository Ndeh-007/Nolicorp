import sharon from "../images/sharon.jpg";
import boris from "../images/boris.jpg";
import anna from "../images/anna.jpg";
import ramson from "../images/ramson.jpg";
import manka from "../images/manka.jpg";
import noela from "../images/noela.png";
import rosemary from "../images/rosemary.jpg";
import laura from "../images/laura.png";

export interface Team{
    name: string;
    position: string;
    description: string[];
    photo: string;
}

export const NolicorpTeam:Team[] = [
    {
        name: `Amporo Corazon Sharon Etandow`,
        position: `stock accountant`,
        description: [
            `Studied Accountancy in the University of Buea
            Obtained BSc in Accountancy in the year 2019
            Started working with NOLICORP in September 2019`,
            `Working at NOLICORP has helped me acquire great skills which will continue to help me as I grow in my career. 	Working at NOLICORP is a privilege and I am glad and proud of being part of the company’s growth. `,
            `To all our customers and potential customers out there, I say, “If you want just the BEST, think NOLICORP”`
            ,],
        photo: sharon,
    },
    {
        name: `Deba Boris`,
        position: `General Manager`,
        description: [
            `I am Deba Boris. Holder of the Higher National Diploma (HND), 2016 from the Higher institute of Business Management and Technology (HIBMAT) Buea. I am From Manyu Division, Mamfe Sub-Division but have live in Buea for 12years now. I was a footballer throughout primary school and Secondary school. `,
            ` I was a DJ when I was in High school and University level and 1year after my HND. I love listening to music, I love doing Research. I love traveling and Reading for Pleasure. I started working in NOLICORP PRINTS. In October 2019. Now, I am the General Manager.`,
        ],
        photo: boris,
    },
    
    {
        name: `Ashu Anna Orock`,
        position: `Documentation`,
        description: [
            `I am called ASHU ANNA OROCK. Am a holder of an Advanced level holder and I started working at NOLICORP Ltd in November 2018`,
            `I am from the South West Region of Cameroon precisely from the Manyu Division, I have lived all my life in many town like Foumbot and Kumba where I attended my primary and secondary education and also lived in Yaoundé where I worked as a sales agent and in Kumba where I worked in ARA Zinc company as an adverting agent then finally moved to Buea where I still work in NOLICORP at the documentation section.`,
            `At my section in NOLICORP, we do diverse activities such as printing, editing, typing, plasification, designing, scanning, formatting, thesis binding and mass productions of books and programs.`,
        ],
        photo: anna,
    },
    {
        name: `Ekwe Ramson Okanda`,
        position: `Press Department`,
        description: [
            `Was born on the 16th of July 2004 at Konye in the Meme sub division of  Southwest Cameroon. Attended His primary school at Mount Carmel Bilingual Nursery and Primary school Kumba where he obtained his FSLC. He then schooled at GBHS Kumba station were he obtained his O/LEVEL and A/LEVEL CERTIFICATES respectively.`,
            `Now a worker at NOLICORP (NO LIMITS CORPORATION) at the Press Department.`,
        ],
        photo: ramson,
    },
    {
        name: ` Manka’a Laura Ngwa`,
        position: `Employee`,
        description: [
            `I\`m   MANKA’A LAURA NGWA, a holder of BSC in Banking and Finance at the University of Buea- Cameroon. I was born on the 21 of January 1998. I Work at No Limit Corporation`,
            `Company Limited (NOLICORP) where our priority is the client’s satisfaction.`,
        ],
        photo: manka,
    },
    {
        name: `Afanwi Noela`,
        position: `Documentation`,
        description: [
            `ello, I am AFANWI NOELA. I'm 28 years old and live in Molyko, Buea, speak English and French . I’m a holder of a bachelor's degree 
            in CST Economics. I graduated from the University of Buea in 2019 
            and started working at Nolicorp in 2020 till date.`,
            `I love sing and 
            dancing ,and I'm good at documentation services such as printing, photocopy , book binding, hard binding  scanning laminating mailing etc. `,
        ],
        photo: noela,
    },
    {
        name: `Wefonge Rosemary Limunga`,
        position: `Accountant`,
        description: [
            `I am called WEFONGE ROSEMARY LIMUNGA. Am a holder of a B.Sc. degree in geology from the university of BUEA(UB) and I started working at NOLICORP Ltd in November 2020.`,
            `i am from the south west region of Cameroon precisely from the FAKO DIVISION, LIMBE SUB-DIVISION. I have lived all my life in EDEA, in the Sanaga-maritime division and I moved to BUEA permanently in 2019`,
            `I have done some contract work with Dangote cement Cameroon and ENEO EDEA. I love reading, travelling and listening to music.`,
            `I started working at NOLICORP Ltd in November 2020 and today, I am the company’s accountant.`
        ],
        photo: rosemary,
    },
    {
        name: `Zelio Laura`,
        position: `Employee`,
        description:[
            `My name is zelio Laura, I was born in Bafoussam in 1996 were I attended my primary and secondary education but had my advance level in Douala, and presently I'm to graduate from the university of Buea in the faculty of education in the department of educational psychology ,I'm single , I do nails designing and working at no Limit Corporation Company limited(NORLICORP).`
        ],
        photo: laura,
    }
]

