import { RobotEyes, RobotHands, Dependencies } from '../../robots/greenCommute/Robot';

context('Remove the saved job',()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('visit saved jobs',()=>{

        it('visit green commute page',()=>{
            dependencies.visitFindJobs();
        })

        it('save a job',()=>{
           robotHands.getJobToSave()

           robotHands.clickSave()
           
        })

        it('saving already saved job',()=>{

            robotHands.clickSavedJobs()

            dependencies.visitFindJobs();

            robotHands.getSavedJobToSave()

            robotHands.clickSave()

            robotEyes.seesAlertMsg()


        })
        
    })
    

    describe('remove a saved job',()=>{
        it('remove job',()=>{
            robotHands.clickSavedJobs()

            robotEyes.seesSavedJob()

            robotHands.getJobToRemove()

            robotHands.clickRemove()

            robotEyes.doesNotSeesSavedJob()
        })

        
    })

   
})