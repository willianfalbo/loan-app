/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaqBotComponent } from './faq-bot.component';

describe('FaqBotComponent', () => {
  let component: FaqBotComponent;
  let fixture: ComponentFixture<FaqBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
