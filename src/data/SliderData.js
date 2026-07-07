import HeroHipo from '../images/hero_hipo.svg'
import HeroRL from '../images/hero_rl.svg'
import HeroProjects from '../images/hero_projects.svg'
import TradingSurface from '../images/trading_surface.png'

export const SliderData = [
    {
        title: "HiPO: LLM Reasoning Research",
        img: HeroHipo,
        label:'View Project',
        description:'First-authored preference optimization research for LLMs, published on arXiv',
        path: '/project3',
        alt: "HiPO research"
    },
    {
        title: "Multi-Agent RL Collision Avoidance",
        img: HeroRL,
        label:'View Project',
        description:'Curriculum learning with a novel collision pressure metric',
        path: '/project4',
        alt: "Reinforcement learning collision avoidance"
    },
    {
        title: "PDE-Based Algorithmic Trading",
        img: TradingSurface,
        label:'View Project',
        description:'A MetaTrader5 auto trader driven by stochastic PDE first-passage probabilities',
        path: '/project5',
        alt: "Algorithmic trading"
    },
    {
        title: "Personal Projects Collection",
        img: HeroProjects,
        label:'View All Projects',
        description:'RL agents, algorithmic trading, robotics, and more',
        path: '/projects',
        alt: "Personal projects"
    }
]
