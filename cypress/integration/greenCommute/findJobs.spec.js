import { RobotEyes, RobotHands, Dependencies } from '../../robots/greenCommute/Robot';

context('Landing page',()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('Find Jobs',()=>{
        it('visit green commute page',()=>{
            dependencies.visitGreenCommute();
        })


        it('Skip location',()=>{
            robotHands.clickSkip()
        })

        it('Enter location',()=>{
            robotHands.clickAutoCompleteList()

            robotHands.typeLocation()

            robotHands.clickNext()

        })

      
        it('Skip location',()=>{
            robotHands.clickSkip()
        })

        it('Enter job location',()=>{
            robotHands.clickAutoCompleteList()

            robotHands.typeJobLocation()

            robotHands.clickNext()


        })
       
        it('Enter skills',()=>{
            robotHands.clickAutoCompleteList()

            robotHands.typeSoftwareSkills()

            robotHands.clickAutoCompleteList()

            robotHands.typeProductSkills()
            
            robotHands.clickFinish()

            robotEyes.seesFindJobsInUrl()

            robotEyes.seesLocation()

            robotEyes.seesJobLocation()

            robotEyes.seesSkill()

        })

        it('Enter skills with location and job location skipped',()=>{
            robotHands.clickAutoCompleteList()

            robotHands.typeSoftwareSkills()
            
            robotHands.clickFinish()

            robotEyes.doesNotSeesJobLocation()


        })


        it('Search',()=>{

            robotEyes.seesJobLocation()

            robotHands.clickDynamicElementAndClear('id','mui-')

            robotHands.typeSkillsInSearch()
           
            robotEyes.seesSearchSkill()
           
            robotHands.clickSearch()
        })

    })

    describe.only('Without entering location and job location',()=>{
        it('visit green commute page',()=>{
            dependencies.visitGreenCommute();
        })

        it('Without entering location',()=>{
            robotHands.clickNext()

            robotEyes.seesWindowAlert()
        })

        it('Without entering job location',()=>{
            robotHands.clickNext()

            robotEyes.seesWindowAlert()
        })


    })

})