import { RobotEyes, RobotHands, Dependencies } from '../../robots/greenCommute/Robot';

context('Filters',()=>{
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies();

    describe('Add filters',()=>{

        it('visit green commute page',()=>{
            dependencies.visitFindJobs();
        })

        it(' Add filters',()=>{
           robotHands.clickFilter()  
           
        })

        it('Apply distance',()=>{
            robotHands.checkDistance()

            robotEyes.distanceChecked()
        })

        it('Apply Green Commute',()=>{
           robotHands.checkGreenCommute()

           robotEyes.greenCommuteChecked()
        })

        it('Apply Experience',()=>{
            robotHands.checkExperience()

            robotEyes.experienceChecked()
        })

        it('Click Apply',()=>{
           robotHands.clickApply()

        })

       it('Clear all',()=>{
           robotHands.clickClearAll()

           robotHands.clickFilter()  

           robotEyes.distanceUnchecked()

           robotEyes.greenCommuteUnchecked()

           robotEyes.experienceUnchecked()

       })

    })
})