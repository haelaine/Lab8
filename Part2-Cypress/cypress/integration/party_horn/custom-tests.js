//const indexhtml= require('../../../index.html');

describe('Party Horn Tests', () => {
  //will run before each of your tests
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  //test
  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then( $el => {
      expect($el).to.have.value(75); 
    })
  });

  it ('when volume input changes slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then($el => {
      expect($el).to.have.value(33);
    })
}); 

it ('audio element changes', () => {
  cy.get('#volume-slider').invoke('val', 33).trigger('input');
  cy.get('#horn-sound').then($el => {
    expect($el).to.have.prop('volume', 0.33);
  });
}); 

it ('radio button changed', () => {
    //click the party horn radio
    cy.get('#radio-party-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
})

it('volume level changed', () => {
  cy.get('#volume-number').clear().type('75');
  cy.get('#volume-image').then( $el => {
    expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg'); 
  });

  cy.get('#volume-slider').invoke('val', 50).trigger('input');
  cy.get('#volume-image').then($el => {
    expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
  })

  cy.get('#volume-number').clear().type('20');
  cy.get('#volume-image').then( $el => {
    expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg'); 
  });

});

it ('disabled honk button', () =>  {
  cy.get('#volume-number').clear();
  cy.get('#honk-btn').then($el => {
    expect($el).to.be.disabled;
  });

  cy.get('#volume-number').clear().type('a');
  cy.get('#honk-btn').then($el => {
    expect($el).to.be.disabled;
  });
  
});

it ('error shown when number is typed outside of the given range', () => {
  cy.get('#volume-number').clear().type('103'); 
  cy.get('#honk-btn').then($emptyEl => {
    expect($emptyEl).to.match('input:invalid') ;
  });
}); 

});
