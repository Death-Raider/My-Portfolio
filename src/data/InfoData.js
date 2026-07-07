import Me1 from '../images/ME2.jpg'
import DataImg from '../images/dataImg.jfif'

import Connection from '../images/connections.png'

import CMatrix from "../images/Complex_Matrix.png"

import Npm from '../images/NPM.png'

import Minecraft from '../images/Minecraft.png'
import MinecraftModel from '../images/model_mc.png'

import ModelSimple from '../images/modelSimple.png'
import Model from '../images/model.png'
import RainClutter from '../images/rainfallClutter.png'
import Process from '../images/Process.png'

import HeroHipo from '../images/hero_hipo.svg'
import HeroRL from '../images/hero_rl.svg'

import TradingSurface from '../images/trading_surface.png'
import TradingDashboard from '../images/trading_dashboard.png'
import TradingDrawdown from '../images/trading_drawdown.png'
import TradingSweep from '../images/trading_tp_sl_sweep.png'

export const InfoDataAbout = [
    {
        Heading: "About me",
        Para1: ()=>{
            return (
            <p>
                Hello everyone! I'm Darsh Kachroo, an AI/ML researcher and developer. I am completing my B.Tech in Electrical and Computer
                Engineering at Vellore Institute of Technology, Chennai (2022-2026), and joining Columbia University for a Master of Science
                in AI and Advanced Computing (2026-2028).
                <br></br>
                My research interest lies in understanding the black-box nature of LLMs, with a focus on interpretability and their learning
                ability. My long-term goal is to bridge the gap between model capability and interpretability, ensuring AI systems are not
                only powerful but understandable and reliable. As an AI Researcher at Algoverse, mentored by Kevin Zhu, I first-authored
                "HiPO: Hierarchical Preference Optimization for Adaptive Reasoning in LLMs" (arXiv, 2026), a segment-level extension of DPO
                that trains models to produce clearer, better-structured reasoning.
                <br></br>
                My research journey began in applied ML: my first paper, on drone-based weed and disease detection with YOLOv8 on single
                board computers (IEEE CICT 2023, under Dr. Pavithra Sekar), has been cited 8 times to date - including by a US patent from
                Moray Technology's Moray.ai venture. My second, with Dr. Prabas Banerjee, modelled springback in the backward metal flow
                forming process (ICFAMMT 2024, Springer Nature Singapore). A fourth work, a curriculum learning framework for multi-robot
                collision avoidance built on attention-based deep Q-learning, is currently under journal review.
            </p>
        )}
 ,
        Para2: ()=>{
            return (
            <p>
                On the applied side, I have built medical imaging models at MedXAI (real-time ultrasound segmentation, kidney and gallbladder
                stone detection, and maxillary bone fracture detection), image-to-HTML generation systems at Heliverse (YOLOv8x ensembles
                combined with LLMs), and real-time defect detection systems at Rotoffset Corporation. I served as the Data Science Lead of
                GDG on Campus at VIT Chennai and as the Technical Lead of HumanoidXVITCC, our humanoid robotics team.
                <br></br>
                My toolkit spans Python (PyTorch, TensorFlow, OpenCV with CUDA), JavaScript (React, Node.js, Next.js), and Tableau, with
                hands-on experience in LLM fine-tuning and preference optimization, RAG pipelines, and reinforcement learning. I also have a
                deep interest in mathematics: I worked with Dr. Kailash Yadav and Dr. Abhishek on solving nonlinear systems of fractional
                differential equations, and I create mathematical visualizations, including work on complex matrices and SU(2).
                <br></br>
                I am always seeking opportunities to contribute to groundbreaking work in AI/ML. If you are looking for a dedicated researcher
                and engineer with published work and hands-on industry experience, I would love to connect and explore potential collaborations.
            </p>
        )},
        BtnShow: 'true',
        BtnLabel:"View Resume",
        link:"",
        href:"https://drive.google.com/file/d/1NVbMzTroQPzyChtLu2877UZDIzGKgcFZ/view?usp=sharing",
        image: Me1,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'My Interests and Accomplishments',
        Para1: `My professional interests lie in vast topics like LLM alignment and reasoning, Linear Algebra, Calculus, Machine Learning, Organic Chemistry, Kinematics, and
Quantum Mechanics, whereas my personal interests are working out, reading novels, and participating in sports like football. I created a good balance
between my professional and personal interests which reduced burnout and increased my productivity.`,
        Para2: ()=>{
            return (
                <p>
                    My accomplishments in the field of research include:
                    <ul>
                        <li>
                            First-authored "HiPO: Hierarchical Preference Optimization for Adaptive Reasoning in LLMs" as an AI Researcher at Algoverse,
                            published on arXiv (2026).
                            <ul>
                                <li>HiPO separates model responses into refined-query, meta-thinking, and answer segments and applies a
                                segment-weighted DPO loss, keeping DPO's efficiency and stability.</li>
                                <li>Built the preference dataset by decomposing candidate responses from Nvidia HelpSteer2 (general alignment)
                                and Math Stack Exchange (mathematical alignment).</li>
                                <li>Independently trained and benchmarked 30 seven-billion-parameter models (Qwen2.5, Mistral v0.3, Llama 3.1),
                                with HiPO outperforming DPO baselines on all tested benchmarks.</li>
                            </ul>
                            <a href="https://arxiv.org/abs/2604.20140" target="_blank" rel="noreferrer">View Publication</a>
                        </li>
                        <li>
                            First-authored a curriculum learning framework for collision avoidance in multi-agent environments, with Dr. Prabas Banerjee,
                            currently under journal review.
                            <ul>
                                <li>An attention-based deep Q-learning agent is weaned from low-density, rare-collision environments to
                                high-density, frequent-collision environments, mirroring how humans learn.</li>
                                <li>Formulated a novel "collision pressure" metric based on pairwise likelihood for estimating collision rates,
                                alongside a carefully balanced reward function.</li>
                            </ul>
                        </li>
                        <li>
                            Led the research on creating a drone-based weed and disease detection model in agricultural fields to maximize crop health.
                            <ul>
                                <li>We presented our work in the 7th IEEE Conference on Information and Communication
                                Technology at IIITDM-Jabalpur.</li>
                                <li>Obtaining and processing the dataset, hyperparameter tuning of YOLOv8 model to get the
                                best accuracy and inference speed trade-off.</li>
                                <li>Cited 8 times to date, including by a US patent from Moray Technology Ltd for their Moray.ai venture.</li>
                            </ul>
                            <a href="https://doi.org/10.1109/CICT59886.2023.10455507" target="_blank" rel="noreferrer">View Publication</a>
                        </li>
                        <li>
                            I worked with industrial data on the flow forming process to create a predictive model for the accurate prediction of springback. The data processing included various challenges, such
                            as dataset shift and few observations.
                            <br></br>
                            My work comprised of:
                            <ul>
                                <li> Comprehensive analysis of the dataset to make inferences and comments on the data. </li>
                                <li> Feature extraction and selection are based on analysis. </li>
                                <li>Creation and testing of various models, ranging from pretrained to custom architecture
                                models. </li>
                                <li> Perform analysis on each model and provide insight into the results obtained. </li>
                                <li> Perform statistical analysis on the predictions and the data. </li>
                                <li> Prioritized and organized tasks to efficiently accomplish service goals. </li>
                                <li> Optimized model parameters through hyperparameter tuning techniques such as grid search
                                and cross-validation. </li>
                            </ul>
                            <a href="https://doi.org/10.1007/978-981-97-4324-7_33" target="_blank" rel="noreferrer">View Publication</a>
                        </li>
                    </ul>
                </p>
        )} ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        href:"",
        image: "",
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataConnections = [
    {
        Heading: 'Sites',
        Para1: ()=>{
            return (
                <>
                <p>
                    I am active in the following sites and I can be reached via these platforms for non-business related queries.
                </p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/darsh-kachroo-3887401a0" target="_blank" rel="noreferrer">LinkedIn - Darsh Kachroo</a></li>
                        <li><a href="https://github.com/Death-Raider" target="_blank" rel="noreferrer">Github - Death-Raider</a></li>
                        <li><a href="https://www.npmjs.com/package/@death_raider/neural-network" target="_blank" rel="noreferrer">NPM - @death_raider</a></li>
                        <li>Instagram - @darsh_kachroo</li>
                    </ul><br></br>
                </>
        )} ,
        Para2: "For further contact info check 'contact me' page" ,
        BtnShow: 'true',
        BtnLabel:"Contact Me",
        link:"/contact",
        image: Connection,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataContact = [
    {
        Heading: 'Email',
        Para1: "Contact me at kachroo.darsh@gmail.com or on linkedin (Darsh Kachroo) for business related queries.",
        Para2: "A reply will be provided within 1-2 days. Till then please check out the Projects section",
        BtnShow: 'true',
        BtnLabel:"Go to Projects",
        link:"/projects",
        image: Me1,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataHome = [
    {
        Heading: 'About Me',
        Para1: `Hello everyone! I'm Darsh Kachroo, an AI/ML researcher and developer. I am completing my B.Tech in Electrical and Computer Engineering at
VIT Chennai and joining Columbia University for my M.S. in AI and Advanced Computing. My research focuses on LLM alignment and interpretability.\n
I have two published papers - drone-based crop disease detection (IEEE CICT 2023, cited by a US patent) and springback prediction on industrial data
(ICFAMMT 2024, Springer Nature) - plus HiPO, a first-authored hierarchical preference optimization method for LLM reasoning developed at Algoverse
(arXiv 2026), and a curriculum learning framework for multi-robot collision avoidance under journal review. I have also built production ML systems
across medical imaging, image-to-code generation, and defect detection.`,
        Para2: "See in full length in the About section." ,
        BtnShow: 'true',
        BtnLabel:"About",
        link:"/about",
        image: Me1,
        reverse: 'true',
        delay: 100
    },
    {
        Heading: 'HiPO: LLM Reasoning Research --Top Project-1',
        Para1: `First-authored research on Hierarchical Preference Optimization: a segment-level extension of DPO that trains LLMs to separate query
refinement, meta-thinking, and answering, outperforming DPO on math benchmarks.` ,
        Para2: "See the full breakdown on the project page." ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project3",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Multi-Agent RL Collision Avoidance --Top Project-2',
        Para1: `A curriculum learning framework that weans attention-based deep Q-learning agents from low-density to high-density collision environments,
built around a novel "collision pressure" metric. Currently under journal review.` ,
        Para2: "See the full breakdown on the project page." ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project4",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Algorithmic Trading --Top Project-3',
        Para1: `A MetaTrader5 auto trader built in three stages, whose advanced engine numerically solves a custom stochastic PDE for the probability of
hitting take-profit before stop-loss - backtested with full drawdown and risk analysis and validated against Monte Carlo simulation.` ,
        Para2: "See the full breakdown on the project page." ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project5",
        image: TradingSurface,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProjects = [
    {
        Heading: 'HiPO: Hierarchical Preference Optimization for LLMs',
        Para1: `High level summary: HiPO is my first-authored research (with Algoverse) on making LLM reasoning more transparent and reliable. Responses are
decomposed into three segments - refined query, meta-thinking, and answer - and a segment-weighted DPO loss trains each part specifically while keeping
DPO's computational efficiency and training stability.` ,
        Para2: `I built the preference dataset by decomposing responses from Nvidia HelpSteer2 and Math Stack Exchange using GPT-4.1, then independently
trained and benchmarked 30 seven-billion-parameter models (Qwen2.5, Mistral v0.3, Llama 3.1) - HiPO outperformed DPO baselines on all tested benchmarks.
The paper is published on arXiv, and the full training pipeline, benchmarking suite, and semi-automated dataset creation tools are on my GitHub
(MetaCognition repository).` ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project3",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Multi-Agent RL Collision Avoidance',
        Para1: `High level summary: A curriculum learning-based framework for collision avoidance in multi-agent environments, developed with Dr. Prabas
Banerjee. Mirroring how humans learn, an attention-based deep Q-learning agent is trained first in low-density, rare-collision environments and
progressively moved into high-density, frequent-collision ones.` ,
        Para2: `The work contributes a carefully balanced reward function and a novel "collision pressure" metric based on pairwise likelihood for
estimating collision rates. The paper is currently under journal review; my Q-Learning and Deep-Q experiments (Pong and goal-chasing environments)
are on my GitHub.` ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project4",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Algorithmic Trading: MetaTrader5 Auto Trader',
        Para1: `High level summary: A fully automated Python trading system on MetaTrader5, built in three stages - NFA-based candlestick pattern
recognition, indicator-driven strategies (KDJ, Bollinger Bands), and an advanced engine that numerically solves a custom stochastic PDE for the
probability of hitting take-profit before stop-loss, opening and managing positions from that distribution.` ,
        Para2: `Backtested bar-by-bar with full drawdown and risk reporting, and validated against Monte Carlo simulation. This project combines my ML
background with my experience as a Financial Market Analyst at Tradeshala.` ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project5",
        image: TradingSurface,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Full-Stack RAG: PDF Question Answering',
        Para1: `High level summary: A full-stack Retrieval-Augmented Generation application where users upload PDFs and ask questions answered from the
document's content. Text is extracted, chunked, and embedded, stored in Pinecone, and retrieved chunks ground the LLM's answers.` ,
        Para2: `Built with Next.js and TypeScript, with token-authenticated API routes, UTF-8 safe PDF extraction, and semantic search over vector
embeddings. The source code is available on my GitHub.` ,
        BtnShow: 'true',
        BtnLabel:"Visit GitHub",
        link:"",
        href:"https://github.com/Death-Raider/FullStack_RAG",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Medical Imaging AI (MedXAI)',
        Para1: `High level summary: During my Machine Learning Engineer internship at MedXAI, I built and tested segmentation models for real-time analysis
of ultrasound images - internal organ segmentation and classification, plus kidney and gallbladder stone detection - and a YOLOv8-based detector for
maxillary bone fracture classification, integrated into a backend.` ,
        Para2: `I also published the abdominal ultrasound image dataset used in this work on Kaggle, available through the button below.` ,
        BtnShow: 'true',
        BtnLabel:"View Dataset",
        link:"",
        href:"https://www.kaggle.com/datasets/darsh22blc1378/abdominal-ultrasound-images",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'More Personal Projects',
        Para1: ()=>(
            <>
            <p>
                Beyond the featured work above, my GitHub hosts a curated collection of personal projects, including:
            </p>
            <ul>
                <li>A gaze-tracking controlled robotic arm for accessibility applications.</li>
                <li>A six-legged ROS2 hexapod robot with kinematics simulation and Rviz2 visualization.</li>
                <li>Food calorie estimation from images using the IEEE FooDD dataset.</li>
                <li>IBM HR analytics with predictive attrition modelling.</li>
                <li>A custom handwritten digit dataset, collected and trained on following the MNIST methodology.</li>
                <li>Mathematical visualizations for 3Blue1Brown's Summer of Math Exposition, including SU(2) matrix intuition animations.</li>
            </ul>
            </>
        ) ,
        Para2: "Each project lives in its own branch of the Personal_Projects repository, indexed from the main branch." ,
        BtnShow: 'true',
        BtnLabel:"Visit GitHub",
        link:"",
        href:"https://github.com/Death-Raider/Personal_Projects",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Earlier Work: NPM Neural Network Package',
        Para1: `An easy to use JavaScript Neural Network package with SGD using backpropagation as a gradient computing technique, published on NPM as
@death_raider/neural-network.` ,
        Para2: "See in full length in the NPM website." ,
        BtnShow: 'true',
        BtnLabel:"View NPM site",
        link:"",
        href:"https://www.npmjs.com/package/@death_raider/neural-network",
        image: Npm,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Earlier Work: Rainfall Prediction (NASA Space Apps - Team OREO)',
        Para1: `High level summary: Built for the NASA Space Apps Challenge as Team OREO. We investigate predictions based on rainfall data to better locate
natural disasters like rain induced flooding and landslides, and to better predict rain patterns for rainfed agriculture. Our model is trained by
combining several neural networks which are trained separately for separate tasks.` ,
        Para2: ()=>(
            <p>
                The processed dataset is published on <a href="https://www.kaggle.com/datasets/darsh22blc1378/world-rainfall-dataset" target="_blank" rel="noreferrer">Kaggle
                (World Rainfall Dataset)</a>. Full details can be seen by visiting the Rainfall predictor page below.
            </p>
        ),
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project1",
        image: Model,
        reverse: 'false',
        delay:  100,
    },
    {
        Heading: 'Earlier Work: Minecraft Vision',
        Para1: `High level summary: Using two different types of computer vision AI to view the screen and detect objects and also segment the surroundings to make way for a third neural network using
genetic algorithm to train itself and move in the world.` ,
        Para2: "Full details can be seen by visiting the Minecraft Vision page below",
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"/project2",
        image: Minecraft,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Earlier Work: Complex Matrix Visualization',
        Para1: `Complex Matrices are not given enough credit for what they do and even when they are used its often introduced as an foreign entity. This project was made to shed light
on such a misinterpreted topic. This project was made in the form of a youtube video for 3Blue1Brown's Summer of Math Exposition.` ,
        Para2: "To watch the video click " ,
        BtnShow: 'true',
        BtnLabel:"Visit Project",
        link:"",
        href: "https://www.youtube.com/watch?v=BOkwMR9-KLU",
        image: CMatrix,
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject1 = [
    {
        Heading: 'High Level Summary',
        Para1: `To investigate predictions based on the rainfall data and understand how we can improve on current methods to better locate natural
disasters like rain induced flooding and landslides or better predict rain patterns for rainfed agriculture using Machine Learning algorithms for the
predictions. Our model is trained by combining several neural networks which are trained separately for separate tasks. ` ,
        Para2: `One initial convolutional layer is fixed in addition to the three AI models. Separating the model into parts was done to increase the
accuracy of every step, ultimately resulting in higher overall accuracy. As a result of this separation, our accuracy increased from 70% to 90%.` ,
        BtnLabel:"",
        BtnShow: 'false',
        link:"",
        image: ModelSimple,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Introduction',
        Para1: `There is a lot of data present and a lot of our daily lives depend on it from checking the weather to finding the fastest route to
your destination. In this project we looking into a project on which our team has created using data provided by NASA and we investigate how this
project would effect people and how data collection can be improved for better usage in the future.` ,
        Para2: `Our aim with this project is to gain insight in how rainfall data is used to make predictions (more that just predicting when the
next rain fall) like predicting probability of landslides and also for arrival and retreat of monsoon and so on. We have made our own model to
explore the data and make meaningful predictions.` ,
        BtnLabel:"",
        BtnShow: 'false',
        link:"",
        image: DataImg,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Obtaining and Parsing Data',
        Para1: ()=>(
            <ul>
                <li>
                    We started our plan by first obtaining the data(reference 1 and 2). We proceeded by creating a simple chrome extension which will
                    automatically download the data.
                </li><br></br>
                <li>
                    We now had our data that needed to be processed to extract the information, namely the calculated precipitation data w.r.t the spatial
                    positions and time. Our code extracted the desired data and color-coded them based on rain intensity. Since all places on earth get
                    rain daily, we made a cutoff at 5mm/day. This cutoff had been chosen as 5mm/day (about 0.2mm/hour) as it is considered light/moderate-light
                    rain. A lower cutoff would have resulted in a cluttered view and a hard time for the Neural Network to make predictions.
                </li><br></br>
                <li>
                    The image shows cluttering increasing as cutoff is increased from 0.5mm/day -{'>'} 1mm/day -{'>'} 5mm/day
                </li><br></br>
            </ul>
        ),
        Para2: `We now had our data separated and filtered and in a convenient format with a 99.781% compression (30.5mb/file -> 66.8kb/image  *on avg*). We then create a
simple website to visualize the data(reference 3) and also made a few saved animations (reference 4).` ,
        BtnLabel:"View Dataset on Kaggle",
        BtnShow: 'true',
        link:"",
        href:"https://www.kaggle.com/datasets/darsh22blc1378/world-rainfall-dataset",
        image: RainClutter,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: "Data Analysis",
        Para1: `From these visualizations we can see that when we increase the fps there is a slight bobbing of the range of the rainfall pattern along the longitudes. This is
caused by the rotation of the earth on a slightly skewed axis. This is the same as how seasons arise and we can also see how the monsoon season approach and retreat which is a
really useful way to make more informed decisions for rainfed agricultural needs.`,
        Para2:`We can also see how the rain pattern propagates longitudinally from left to right along the top and bottom and from right to left in the middle. This effect is
actually the Coriolis effect in action. Now we go on to actually using the model and making some predictions! The image shows the model put together.`,
        BtnLabel: "",
        BtnShow: 'false',
        link: "",
        image: Model,
        reverse: 'false'
    },
    {
        Heading: "Predicting Data",
        Para1: ()=>(
            <ul>
                <li>
                    Now we continue with our plans for prediction of future rainfall data. We begin with creating a layout for how we would set up the neural networks and after lots of trial
                    and error we ended up with this plan.
                    From our chrome extension we had downloaded about 6700 files amassing 250GB in storage and about 480MB when converted into the image. The first step of the plan was to
                    convolve the images into an even smaller size with each convolved image being 4.32kb and a dimension of (120 x 60)px.
                </li>
                <li>
                    This convolution was necessary to decrease the dimensionality of the images for the prediction neural network. A Convolutional Neural Network was not used as it didn't
                    produce as clear and accurate images and same for LSTM and CLSTM (Convolutional Long Short Term Memory ) models.
                    After the predictions were made in the convolved form , we denoised it by another neural network so that it may smoothen the images when they are eventually deconvolved by
                    yet another neural network.
                </li>
                <li>
                    After all these individual models had trained we join them into a singular bigger model. This process is often used in Auto Encoders and Generative Adversarial Networks (GANs).
                </li><br />
            </ul>
        ),
        Para2:`The Image shows The process of prediction for a test date of 1 sept 2021, and its accuracy was 87% on it overall.`,
        BtnLabel: "",
        BtnShow: 'false',
        link: "",
        image: Process,
        reverse: 'false'

    }
]
export const InfoDataProject2 = [
    {
        Heading: 'High Level Summary',
        Para1: `Using two different types of computer vision AI to view the screen and detect objects and also segment the surroundings to make way for a third neural network using
genetic algorithm to train itself and move in the world.` ,
        Para2: `The two AI are the Yolov5 model and a U-net derived model. The yolov5 is used to make bounding boxes around creatures/mob, while the U-net is for segmenting
the terrain. That way with the two combined we get the full picture; the bounding box helps to identify the hitboxes and acts as a confirmation for the instance segmentation,
the instance segmentation helps to identify the terrain shape which is needed for movement and it shares the workload from yolov5 from commonly occurring blocks like grass, dirt,
sky, etc.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Introduction',
        Para1: `I had seen how AI can be very useful in a confined and well defined system but my knowledge on dynamic system AI was very limited and I had to try it out. The idea
to use minecraft came from my interests in videogames and the fact that minecraft is simple but can be as complicated as needed which made it the perfect game to form the AI on!` ,
        Para2: `Doing some research, I found out that there was no Minecraft self-acting bot made yet because Minecraft was a game defined by the user's imagination and creativity
which is a task that AI cant do. Despite the impossible-seeming task at hand, I decided to take it head-on and define how the bot will learn. A genetic algorithm (GA) alone isn't enough
without a solid and enforceable goal.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Yolov5',
        Para1: `I have used the Yolov5 model for bounding box detection of ten classes of objects such as mobs and special blocks like ores. I had to create and label the dataset as none existed before.
I have used Roboflow to host the data and distinguish them. The delay in forming the dataset was due to the high number of classes. Using image enhancement, I tripled my dataset.` ,
        Para2: `From a coding perspective, I had to write a script to take screenshots and preprocess them for the yolov5 model, and I had to edit the yolov5 module code to align with my desires of the
output image and format. The majority of the time went into learning the module and creating the dataset. Using only five classes, I received an accuracy of 97% after ten epochs but, this is not
representative of the actual accuracy. Currently, I'm working on expanding the dataset.` ,
        BtnShow: 'true',
        BtnLabel:"Visit Dataset",
        link:"",
        href:"https://app.roboflow.com/oragimirox-gmail-com/minecraft-mob/images/?split=train",
        image: Minecraft,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Instance Segmentation',
        Para1: ()=>(
            <ul>
                <li>
                    I have used a U-net layered on top of a mobile net model. Our U-Net model was created by extracting features from the mobile network and feeding them into the U-Net model. Even during
                    the training of the U-net, the pre-trained mobile net layers remained fixed.
                </li><br />
                <li>
                    There were also 21 classes for segmentation, and there was a substantial imbalance in the dataset due to me having to create the dataset myself, and it is time-consuming more than the yolov5 data.
                </li><br />
                <li>
                    So far, I have only collected 64 images and have not used any augmentation; after collecting 100 images, I intend to use an
                    enhancement to make a noticeable impact!
                </li><br />
            </ul>
        ),
        Para2: `TFDS was a new experience altogether, it was tedious to customize the hyperparameters. My training strategy uses the Mean Squared Error (MSE), an unconventional loss function.
Categorial Cross-Entropy (CCE) is usually used to learn patterns for this task, but MSE learned faster than CCE.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: MinecraftModel,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Movement',
        Para1: `--inprogress--` ,
        Para2: `` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject3 = [
    {
        Heading: 'High Level Summary',
        Para1: `HiPO (Hierarchical Preference Optimization) is my first-authored research on making LLM reasoning more transparent and reliable, developed
as an AI Researcher at Algoverse under the mentorship of Kevin Zhu. Each candidate response is decomposed into three segments - a refined query, the
meta-thinking (the model's reasoning process), and the final answer - and a segment-weighted DPO loss trains each part specifically.` ,
        Para2: `Because the decomposition reuses the standard DPO loss per component, HiPO keeps DPO's computational efficiency and training stability
while adding segment-level granularity. The full paper is published on arXiv.` ,
        BtnShow: 'true',
        BtnLabel:"View Paper",
        link:"",
        href:"https://arxiv.org/abs/2604.20140",
        image: HeroHipo,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Motivation',
        Para1: `Direct Preference Optimization is effective for aligning LLMs with human preferences, but it relies on a single, monolithic preference
signal to distinguish two candidate responses. For complex reasoning tasks this lacks granularity: a response can have a strong final answer built on
muddled reasoning, or clear reasoning that arrives at the wrong answer, and DPO cannot tell these apart.` ,
        Para2: `My broader research interest is understanding the black-box nature of LLMs. Structuring responses into explicit reasoning segments both
improves training signal and makes the model's reasoning process more inspectable - a step toward models that are not only powerful but understandable.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Dataset Creation',
        Para1: ()=>(
            <ul>
                <li>
                    The segment-level loss depends on preference data with concretely sectioned answers, which does not readily exist. I therefore built a
                    new dataset by decomposing candidate responses into refined-query, meta-thinking, and answer segments using GPT-4.1.
                </li><br></br>
                <li>
                    Two genres of data were covered: Nvidia HelpSteer2 for general alignment and Math Stack Exchange for mathematical alignment.
                </li><br></br>
                <li>
                    The semi-automated dataset creation pipeline is available in my MetaCognition repository on GitHub.
                </li><br></br>
            </ul>
        ),
        Para2: `Getting the decomposition consistent across both dataset genres was one of the main challenges of the project - the auxiliary loss is only
as good as the segmentation it trains on.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Training and Results',
        Para1: ()=>(
            <ul>
                <li>
                    I independently trained and benchmarked 7-billion-parameter models including Qwen2.5, Mistral v0.3, and Llama 3.1 - collecting 30
                    trained models in 48 hours of training time, with an additional 20 hours of benchmark inference spread over a week.
                </li><br></br>
                <li>
                    HiPO-trained models outperformed DPO baselines on all tested math benchmarks.
                </li><br></br>
                <li>
                    Beyond raw scores, HiPO responses were judged more organized, logically flowing, and consistent (GPT-4 as evaluator).
                </li><br></br>
            </ul>
        ),
        Para2: `The full training pipeline, benchmarking suite, and dataset tooling are open on my GitHub in the MetaCognition repository.` ,
        BtnShow: 'true',
        BtnLabel:"View Code",
        link:"",
        href:"https://github.com/Death-Raider/MetaCognition",
        image: "",
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject4 = [
    {
        Heading: 'High Level Summary',
        Para1: `A curriculum learning-based framework for collision avoidance in multi-agent environments, developed with Dr. Prabas Banerjee. Mirroring
how humans learn, an attention-based deep Q-learning agent is trained first in low-density, rare-collision environments and progressively moved into
high-density, frequent-collision ones.` ,
        Para2: `The paper, "Curriculum Learning-Based Development Framework for Multi-Robot Coordination", is currently under journal review.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: HeroRL,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Motivation',
        Para1: `Model-free agents are a crucial part of navigation tasks: they are environment-agnostic, which makes them highly adaptable. An agent
internalizes high-level concepts that let it move beyond instantaneous rewards to long-term planning - accepting locally suboptimal moves that yield a
higher net reward.` ,
        Para2: `However, reactive agents are still prone to collisions in high-density environments due to computational constraints and suboptimal move
choices. The question this work answers is how to train agents that stay reliable as density - and therefore collision frequency - rises.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Key Contributions',
        Para1: ()=>(
            <ul>
                <li>
                    A curriculum that weans the agent from low-density, rare-collision environments to high-density, frequent-collision environments,
                    the way a human would build up skill.
                </li><br></br>
                <li>
                    A carefully balanced reward function - conceptually simple, but experimentally a sensitive balancing game with a heavy focus on each
                    component.
                </li><br></br>
                <li>
                    A novel "collision pressure" metric, formulated from pairwise likelihood, for estimating collision rates - giving the framework an
                    interpretable, formalized handle on risk.
                </li><br></br>
            </ul>
        ),
        Para2: `Thoroughly formalizing each step also gave me clarity on interpretability in reinforcement learning - the same thread that runs through my
LLM research.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Experiments and Code',
        Para1: `The groundwork for this research - Q-Learning and Deep-Q agents tested on Pong and goal-chasing environments, demonstrating the advantage
of curriculum learning - is public in my Personal_Projects repository on GitHub.` ,
        Para2: `Each project lives in its own branch, indexed from the main branch of the repository.` ,
        BtnShow: 'true',
        BtnLabel:"View Code",
        link:"",
        href:"https://github.com/Death-Raider/Personal_Projects",
        image: "",
        reverse: 'false',
        delay: 100
    }
]
export const InfoDataProject5 = [
    {
        Heading: 'High Level Summary',
        Para1: `A fully automated MetaTrader5 trading system written in Python, built up in three stages - basic, intermediate, and advanced. The advanced
stage treats take-profit and stop-loss as a first-passage boundary problem: a custom stochastic PDE is solved numerically to give the live probability of
hitting TP before SL, and positions are opened and managed from that distribution.` ,
        Para2: `The image shows one of the computed P(TP) surfaces: the probability of hitting take-profit as a function of price position and volatility -
red where stop-loss dominates, green where take-profit dominates.` ,
        BtnShow: 'true',
        BtnLabel:"View Code",
        link:"",
        href:"https://github.com/Death-Raider/Personal_Projects",
        image: TradingSurface,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Stage 1 - Basics: Pattern Recognition',
        Para1: `The first version was a state-based trader: candlesticks are classified into events, and an NFA (nondeterministic finite automaton) matches
the event stream against a library of hand-defined candlestick patterns to generate buy and sell signals. The idea extends naturally to a Markov chain over
patterns, estimating the probability of one observed pattern morphing into another.` ,
        Para2: `Its limits shaped the next stages: every pattern must be defined explicitly, complex multi-valued events are hard to express, and a
three-candle bullish pattern that moves 10 pips is treated the same as one that moves 50. Pure pattern recognition lacks the dynamics real markets have.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Stage 2 - Intermediate: Indicators and Richer State',
        Para1: ()=>(
            <ul>
                <li>
                    Technical indicators - KDJ(9,3,3) and Bollinger Bands - combined into a single signal with overbought/oversold thresholds.
                </li><br></br>
                <li>
                    A richer market state: pip movement within a pattern, volume, and timezone-based market-session overlaps for more effective trade
                    windows, plus correlation with released indices like CPI.
                </li><br></br>
                <li>
                    Backtesting with hold periods and dollar-denominated stop-loss and take-profit.
                </li><br></br>
            </ul>
        ),
        Para2: `This stage also pinned down the decision variables the automation must set for every position: direction, lot size, TP/SL levels, and when
to close - the interface every later strategy plugs into.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: "",
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Stage 3 - Advanced: The Stochastic PDE Engine',
        Para1: ()=>(
            <ul>
                <li>
                    Price is modelled with a stochastic-volatility SDE, turning "TP or SL first?" into a first-passage problem. A custom stochastic PDE is
                    solved numerically to obtain P(hit TP | position, volatility) over the whole state space.
                </li><br></br>
                <li>
                    268 features are computed from OHLCV data by the risk-modelling suite, and an MLP is trained on rolling-window OLS slopes to anticipate
                    short-term drift.
                </li><br></br>
                <li>
                    A signal generator combines the active PDE distribution with these features to take positions, recomputing the probabilities as the
                    market shifts.
                </li><br></br>
                <li>
                    A dynamic position manager adjusts TP and SL while trades are open, with config-driven behaviour, incremental CSV price management, and
                    full trade and system logging.
                </li><br></br>
            </ul>
        ),
        Para2: `The image shows the first-passage simulation dashboard: simulated paths hitting TP (green) and SL (red), exit-time distributions, the PDE
probability surface with iso-probability contours, PDE-versus-Monte-Carlo agreement, and sensitivity to the volatility dynamics. Click to view full size.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: TradingDashboard,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Backtesting and Risk Analysis',
        Para1: `The PDE strategy is backtested bar-by-bar over tens of thousands of bars across M1 to H4 timeframes, recomputing entry probabilities on
market shifts, with results aggregated per timeframe.` ,
        Para2: `Every run produces a full risk report. The drawdown analysis shown here tracks cumulative PnL against its running maximum: maximum and
average drawdown, Calmar ratio, time underwater, and recovery periods - the numbers that decide whether a strategy is deployable, not just whether it is
profitable in-sample.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: TradingDrawdown,
        reverse: 'false',
        delay: 100
    },
    {
        Heading: 'Choosing TP/SL and the Road Ahead',
        Para1: `The simulation layer (Monte Carlo, GARCH, and EWMA volatility models) does more than validate the PDE: it sweeps expected PnL across the
entire TP/SL space, so the boundaries are chosen from the expected-value landscape rather than by habit. The image shows one such sweep with the currently
configured TP and SL marked.` ,
        Para2: `Planned next steps for the system: sentiment analysis on news flow, reinforcement learning for position management, and an LLM overwatch
layer supervising the automated trades.` ,
        BtnShow: 'false',
        BtnLabel:"",
        link:"",
        image: TradingSweep,
        reverse: 'false',
        delay: 100
    }
]
