import { eq } from 'cypress/types/lodash';
import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitGreenCommute(){
        this.accessUrl('http://bc15-green-commute.dev-apps.io/');
    }

    visitFindJobs(){
        this.accessUrl('http://bc15-green-commute.dev-apps.io/findJobs');
    }
}

export class RobotEyes extends BaseEyes{
    seesJobLocation(){
        this.seesIdValueLast('id','mui-','Hyderabad')
    } 

    doesNotSeesJobLocation(){
        this.doesNotSeesIdValueLast('id','mui-')
    }
    seesLocation(){
        this.seesDomContainText('#root > div > div > div.MuiGrid-root.jss49.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-10 > div.MuiGrid-root.jss47.MuiGrid-item.MuiGrid-grid-xs-12 > div > div.MuiGrid-root.jss62.MuiGrid-item.MuiGrid-grid-xs-3 > div > h4',
             'Hyderabad, Telangana, India')   
    }

    seesSkill(){
        this.seesIdValueFirst('id','mui-','Product Manager')
    }

    seesSearchSkill(){
        this.seesIdValueFirst('id','mui-','UX Designer')
    }

    seesFindJobsInUrl(){
        this.seesPathNameInUrl('/findJobs')
    }

    seesSavedJob(){
        this.seesDomContainText('#root > div > div','User Interface Designer')
    }

    doesNotSeesSavedJob(){
        this.seesDomContainText('#root > div > div','User Interface Designer')
    }

    seesAlertMsg(){
                                    
        this.seesTextInIndexChild('#root > div > div',1,'div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div.MuiGrid-root.MuiGrid-item > div > div > div:nth-child(1) > div > div.MuiSnackbar-root.MuiSnackbar-anchorOriginTopCenter > div > div.MuiAlert-message',
              'Job already present in saved jobs.')
    }

    seesWindowAlert(){
        this.windowAlert('please enter the location')
    }

    distanceChecked(){
        this.checkedboxChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(1) > div > div:nth-child(4) > div > label'
        ,0,0,0)
    }

    greenCommuteChecked(){
        this.checkedboxChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(3) > div > div:nth-child(2) > div > label',
        0,0,0)
    }

    experienceChecked(){
        this.checkedboxChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(5) > div > div:nth-child(5) > div > label'
        ,0,0,0)
    }

    distanceUnchecked(){
        this.checkedboxNotChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(1) > div > div:nth-child(4) > div > label'
        ,0,0,0)
    }

    greenCommuteUnchecked(){
        this.checkedboxNotChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(3) > div > div:nth-child(2) > div > label',
        0,0,0)
    }

    experienceUnchecked(){
        this.checkedboxNotChecked('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(5) > div > div:nth-child(5) > div > label'
        ,0,0,0)
    }

}

export class RobotHands extends BaseHands{


    clickNext(){
        this.clickOnDomElement(':nth-child(1) > [data-testid=button]')
    }

    clickFinish(){
        this.clickOnDomElement('[data-testid=button]')
    }

    clickSavedJobs(){
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(3)')
    }

    clickFindJobs(){
        this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-2 > div > div > ul > div:nth-child(2)')
    }

   clickAutoCompleteList(){
       this.clickDynamicElement('id','mui-')
   }

   clickAutoCompleteListAndClear(){
       this.clickDynamicElementAndClear('id','mui-')
   }

   typeLocation(){
       this.typeOnAutoCompleteListElementWithTag('div','aria-controls','mui-','Hyderabad')
   }

   typeJobLocation(){
    this.typeOnAutoCompleteListElementWithTag('div','aria-controls','mui-','Hyderabad')

   }

   typeSkillsInSearch(){
       this.typeOnAutoCompleteListElementWithTag('div','aria-controls','mui-','UX')
   }

   typeSoftwareSkills(){
    this.typeOnAutoCompleteListElementWithTag('input','aria-controls','mui-','Product')

   }

   typeProductSkills(){
       this.typeOnAutoCompleteListElementWithTag('input','aria-controls','mui-','Java')
   }


   clickSearch(){
       this.clickOnDomElement('[data-testid=find-job] > .MuiButton-root')
   }

   getJobToSave(){
       this.clickIndexChild('#root > div > div',0,'div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-9.MuiGrid-item.MuiGrid-justify-xs-center'
       ,0)
   }

   getSavedJobToSave(){
       this.clickIndexChild('#root > div > div',0,'div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-9.MuiGrid-item.MuiGrid-justify-xs-center',
            0)
   }
   clickSave(){
       this.clickOnDomElement('.MuiGrid-root > .MuiButton-outlined')
   }

  getJobToRemove(){
      this.clickIndexChild('#root > div > div',0,'div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div'
          ,0)
  }

  clickRemove(){
      this.clickOnDomElement('.MuiButton-outlined')
  }

  clickFilter(){
      this.clickOnDomElement('#root > div > div > div.MuiGrid-root.jss4.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-10 > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-12 > div > div > div.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-justify-xs-flex-end > div.MuiGrid-root.jss26.MuiGrid-item.MuiGrid-grid-xs-3 > div > button')
  }

  checkDistance(){
           
      this.checkInput('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(1) > div > div:nth-child(4) > div > label'
      ,0,0,0)
  }

  checkExperience(){
      this.checkInput('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(5) > div > div:nth-child(5) > div > label'
         ,0,0,0)
  }

  checkGreenCommute(){
      this.checkInput('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',1,'div:nth-child(3) > div > div:nth-child(2) > div > label',
      0,0,0)
  }

  clickApply(){
      this.clickOnApply('body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div',2,1,0)
  }

  clickSkip(){
                             
      this.clickOnDomElement('#root > div > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-7 > div > div.jss3 > div:nth-child(5) > div > div:nth-child(2) > button')
  }

  clickClearAll(){
     this.clickOnDomContains('clear all')
  }

}