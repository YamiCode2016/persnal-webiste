import React, { Component } from 'react'
import './Cv.css'
import Social from '../../components/social/Social'
import Skills from '../../components/skills/Skills'
import Hobby from '../../components/hobby/Hobby'
import Education from '../../components/education/Education'
import Experience from '../../components/experience/Experience'
import Personal from '../../components/personal/Personal'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import FreeLance from '../../components/freelance/Freelance'

class Cv extends Component {
  render () {
    return (
      <div>
        {!this.props.isLoaded ? (
          <div className='spinner' />
        ) : (
          <div className='body-cv'>
            <div className='body'>
              <div className='content'>
                <div className='header row'>
                  <div className='col-sm-5 first-block'>
                    <div className='img'>
                      <img src='assets/images/user.jpg' alt='zemouri badr' />
                    </div>
                    <Social socials={this.props.socials} />
                  </div>
                  <div className='col-sm-7 second-block'>
                    <div className='container-1'>
                      <h1>{this.props.name}</h1>
                      <h2 className='min-title'>{this.props.description}</h2>
                    </div>
                    <h1>EDUCATION</h1>
                    <Education educations={this.props.educations} />
                  </div>
                </div>
                <div className='resume row'>
                  <div className='col-sm-5'>
                    <h1>Skills</h1>
                    <Skills skills={this.props.skills} />

                    <h1>Personal experiences</h1>
                    <Personal personal={this.props.personal} />

                    <h1>Internships</h1>
                    <Experience experiences={this.props.internships} />
                  </div>
                  <div className='col-sm-7'>
                    <h1>Experiences</h1>
                    <Experience experiences={this.props.experiences} />

                    <h1>Freelances</h1>
                    <FreeLance experiences={this.props.freelances} />

                    <h1>Hobbies</h1>
                    <Hobby hobbies={this.props.hobbies} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let socials = []
  let educations = []
  let skills = []
  let personal = []
  let hobbies = []
  let freelances = []
  let experiences = []
  let internships = []
  let name = ''
  let description = ''
  let isLoaded = false
  if (state.firestore && state.firestore.data && state.firestore.ordered) {
    let data = state.firestore.data
    let ordredData = state.firestore.ordered
    if (data.socials) {
      socials = Object.keys(data.socials).map(key => {
        return { id: key, ...data.socials[key] }
      })
    }
    if (data.personal) {
      personal = Object.keys(data.personal).map(key => {
        return { id: key, ...data.personal[key] }
      })
    }
    if (data.hobbies) {
      hobbies = Object.keys(data.hobbies).map(key => {
        return { id: key, ...data.hobbies[key] }
      })
    }
    if (data.details) {
      name = data.details['name'] ? data.details['name'].value : ''
      description = data.details['description']
        ? data.details['description'].value
        : ''
    }
    if (ordredData.education) {
      educations = Object.keys(ordredData.education).map(key => {
        return { id: key, ...ordredData.education[key] }
      })
    }
    if (ordredData.internships) {
      internships = Object.keys(ordredData.internships).map(key => {
        return { id: key, ...ordredData.internships[key] }
      })
    }
    if (ordredData.education) {
      educations = Object.keys(ordredData.education).map(key => {
        return { id: key, ...ordredData.education[key] }
      })
    }
    if (ordredData.freelances) {
      freelances = Object.keys(ordredData.freelances).map(key => {
        return { id: key, ...ordredData.freelances[key] }
      })
    }
    if (ordredData.skills) {
      skills = Object.keys(ordredData.skills).map(key => {
        return { id: key, ...ordredData.skills[key] }
      })
    }
    if (ordredData.experiences) {
      experiences = Object.keys(data.experiences).map(key => {
        return { id: key, ...data.experiences[key] }
      })
    }
    if (
      data.socials &&
      data.details &&
      data.hobbies &&
      ordredData.internships &&
      ordredData.experiences &&
      ordredData.education &&
      ordredData.skills &&
      ordredData.freelances
    ) {
      isLoaded = true
    }
  }
  return {
    socials: socials,
    isLoaded: isLoaded,
    name: name,
    description: description,
    educations: educations,
    skills: skills,
    personal: personal,
    hobbies: hobbies,
    experiences: experiences,
    freelances: freelances,
    internships: internships
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: 'socials'
    },
    {
      collection: 'details'
    },
    {
      collection: 'education',
      orderBy: ['yearEnd', 'desc']
    },
    {
      collection: 'skills',
      orderBy: ['level', 'desc']
    },
    {
      collection: 'personal'
    },
    {
      collection: 'hobbies'
    },
    {
      collection: 'experiences',
      orderBy: ['dateTo', 'desc']
    },
    {
      collection: 'freelances',
      orderBy: ['date', 'desc']
    },
    {
      collection: 'internships',
      orderBy: ['dateTo', 'desc']
    }
  ])
)(Cv)
