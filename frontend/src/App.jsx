import React from 'react'
import  Navbar from './components/Navbar.jsx'
import  Footer from './components/Footer.jsx'
import  Home from './pages/Home.jsx'
import Notes from './pages/Notes.jsx'
import About from './pages/About.jsx'
import Query from './pages/Query.jsx'
import Notfound from './pages/Notfound.jsx'
import NotesDetails from './pages/NotesDetails.jsx'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'




import Physics from './Subjects/Physics subject/Physics.jsx'
import Physicsnotes from './Subjects/Physics subject/Physicsnotes.jsx'


import Chemistry from './Subjects/Chemistry subject/Chemistry.jsx'
import Chemistrynotes from './Subjects/Chemistry subject/Chemistrynotes.jsx'

import CommunicationSkills from './Subjects/Communication Skills subject/CommunicationSkills.jsx'
import Cnotes from './Subjects/Communication Skills subject/Cnotes.jsx'


import Mathematics from './Subjects/Mathematics-1 subject/Mathematics-1.jsx'
import M1notes from './Subjects/Mathematics-1 subject/M1notes.jsx'


import TheoryOfComputation from './Subjects/Theory Of Computation subject/TheoryOfComputation.jsx'
import TOCnotes from './Subjects/Theory Of Computation subject/TOCnotes.jsx'
import TOCpaper from './Subjects/Theory Of Computation subject/TOCpaper.jsx'


import IntroductiontoArtificialIntelligence from './Subjects/Introduction to Artificial Intelligence subject/IntroductiontoArtificialIntelligence.jsx' 
import Ainotes from './Subjects/Introduction to Artificial Intelligence subject/Ainotes.jsx'


import Mathematicstwo from './Subjects/Mathematics-2 subject/Mathematics-2.jsx'
import Mtwonotes from './Subjects/Mathematics-2 subject/Mtwonotes.jsx'
import MPyqs from './Subjects/Mathematics-2 subject/MPyqs.jsx'

import NetworkSecurityandCryptography from './Subjects/Network Security and Cryptography subject/NetworkSecurityandCryptography.jsx' 
import NSCnotes from './Subjects/Network Security and Cryptography subject/NSCnotes.jsx'

import ConceptofSystemSecurity from './Subjects/Concept of System Security subject/ConceptofSystemSecurity.jsx'
import CSSnotes from './Subjects/Concept of System Security subject/CSSnotes.jsx'


import DiscreateStructure from './Subjects/Discreate Structure subject/DiscreateStructure.jsx'
import DStructure from './Subjects/Discreate Structure subject/DStructure.jsx'

import DataStructuresandAlgorithms from './Subjects/Data Structures and Algorithms subject/DataStructuresandAlgorithms.jsx'
import DSAnotes from './Subjects/Data Structures and Algorithms subject/DSAnotes.jsx'


import ComputerNetwork from './Subjects/Computer Network subject/ComputerNetwork.jsx'
import CNnotes from './Subjects/Computer Network subject/CNnotes.jsx'
import CNpyqs from './Subjects/Computer Network subject/CNpyqs.jsx'

import OperatingSystem from './Subjects/Operating System subject/OperatingSystem.jsx'
import OSnotes from './Subjects/Operating System subject/OSnotes.jsx'
import OSpyqs from './Subjects/Operating System subject/OSpyqs.jsx'



import DataCommunication from './Subjects/Data Communication subject/DataCommunication.jsx'
import DCnotes from './Subjects/Data Communication subject/DCnotes.jsx'
import DSpyqs from './Subjects/Data Communication subject/DSpyqs.jsx'

import ComputerSystemOrganization from './Subjects/Computer System Organization subject/ComputerSystemOrganization.jsx'
import CSOnotes from './Subjects/Computer System Organization subject/CSOnotes.jsx'
import CSSpyqs from './Subjects/Concept of System Security subject/CSSpyqs.jsx'


import AnalysisandDesignAlgorithms from './Subjects/Analysis and Design of Algorithms subject/AnalysisandDesignAlgorithms.jsx' 
import ADAnotes from './Subjects/Analysis and Design of Algorithms subject/ADAnotes.jsx' 

import EMS from './Subjects/EMS subject/EMS.jsx'
import EMSnotes from './Subjects/EMS subject/EMSnotes.jsx'
import EMSpyqs from './Subjects/EMS subject/EMSpyqs.jsx'

import DatabaseManagementSystem from './Subjects/Database Management System subject/DatabaseManagementSystem.jsx' 
import DBMSnotes from './Subjects/Database Management System subject/DBMSnotes.jsx'
import DBMSpyqs from './Subjects/Database Management System subject/DBMSpyqs.jsx'


import DLCD from './Subjects/DLCD subject/DLCD.jsx'

import DLCDnotes from './Subjects/DLCD subject/DLCDnotes.jsx'



import IDT from './Subjects/IDT subject/IDT.jsx'


import ObjectOrientedProgramming from './Subjects/Object Oriented Programming subject/ObjectOrientedProgramming.jsx'  
import OOPsnotes from './Subjects/Object Oriented Programming subject/OOPsnotes.jsx'


import SEPM from './Subjects/SEPM subject/SEPM.jsx'
import SEPMnotes from './Subjects/SEPM subject/SEPMnotes.jsx'




















export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/about' element={<About />} />
          <Route path='/query' element={<Query />} />
          <Route path='*' element={<Notfound />} />
          <Route path='/notes/:subjectId' element={<NotesDetails />} />

          <Route path='/notes/physics' element={<Physics />} />
          <Route path='/Physics/Physicsnotes' element={<Physicsnotes />} />

          <Route path='/notes/chemistry' element={<Chemistry />} />
           <Route path='/Chemistry/Chemistrynotes' element={<Chemistrynotes />} />

          <Route path='/notes/communication skills' element={<CommunicationSkills />} />
            <Route path='/communication/cnotes' element={<Cnotes />} />

          <Route path='/notes/mathematics-1' element={<Mathematics />} />
          <Route path='/M1/M1notes' element={<M1notes />} />



          <Route path='/notes/theory of computation' element={<TheoryOfComputation />} />
          <Route path='/notes/theory of computation/notes' element={<TOCnotes />} />
          <Route path='/notes/theory of computation/papers' element={<TOCpaper />} />


          <Route path='/notes/introduction to artificial intelligence' element={<IntroductiontoArtificialIntelligence />} />
          <Route path='/notes/introduction to artificial intelligence/notes' element={<Ainotes />} />


          <Route path='/notes/mathematics-2' element={<Mathematicstwo />} />
          <Route path='/notes/mathematics-2/notes' element={<Mtwonotes />} />
          <Route path='/M2/MPyqs' element={<MPyqs />} />

          <Route path='/notes/network security and cryptography' element={<NetworkSecurityandCryptography />} />
          <Route path='/notes/network security and cryptography/NSCnotes' element={<NSCnotes/>} />


          <Route path='/notes/concept of system security' element={<ConceptofSystemSecurity />} />
          <Route path='/CSS/CSSnotes' element={<CSSnotes />} />
          <Route path='/CSS/CSSpyqs' element={<CSSpyqs/>} />



          <Route path='/notes/discreate structure' element={<DiscreateStructure />} />
          <Route path='/notes/discreate structure/notes' element={<DStructure />} />

          
          <Route path='/notes/data structures and algorithms' element={<DataStructuresandAlgorithms />} />
          <Route path='/DSA/DSAnotes' element={<DSAnotes />} />


          <Route path='/notes/computer network' element={<ComputerNetwork />} />
          <Route path='/notes/computer network/notes' element={<CNnotes />} />
          <Route path='/CN/CNpyqs' element={<CNpyqs />} />

          <Route path='/notes/operating system' element={<OperatingSystem />} />
          <Route path='/notes/operating system/notes' element={<OSnotes />} />
          <Route path='/OS/OSpyqs' element={<OSpyqs />} />

          <Route path='/notes/data communication' element={<DataCommunication />} />
          <Route path='/notes/data communication/notes' element={<DCnotes />} />
          <Route path='/DC/DSpyqs' element={<DSpyqs />} />

          <Route path='/notes/computer system organization' element={<ComputerSystemOrganization />} />
          <Route path='/CSO/CSOnotes' element={<CSOnotes />} />



          <Route path='/notes/analysis and design algorithms' element={<AnalysisandDesignAlgorithms />} />
           <Route path='/ADA/ADAnotes' element={<ADAnotes />} />

          <Route path='/notes/ems' element={<EMS />} />
          <Route path='/notes/ems/notes' element={<EMSnotes />} />
          <Route path='/EMS/EMSpyqs' element={<EMSpyqs />} />

          <Route path='/notes/database management system' element={<DatabaseManagementSystem />} />
          <Route path='/notes/database management system/notes' element={<DBMSnotes />} />
          <Route path='/DBMS/DBMSpyqs' element={<DBMSpyqs />} />

          <Route path='/notes/dlcd' element={<DLCD />} />
          <Route path='/DLCD/DLCDnotes' element={<DLCDnotes />} />

          <Route path='/notes/idt' element={<IDT />} />
          <Route path='/notes/object oriented programming' element={<ObjectOrientedProgramming />} />
          <Route path='/notes/object oriented programming/notes' element={<OOPsnotes />} />

          <Route path='/notes/sepm' element={<SEPM />} />
          <Route path='/notes/sepm/notes' element={<SEPMnotes />} />

        
        </Routes>
        <Footer />              
      </BrowserRouter>
    </div>
  )
}
