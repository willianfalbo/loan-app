/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaqBotIconComponent } from './faq-bot-icon.component';

describe('FaqBotIconComponent', () => {
  let component: FaqBotIconComponent;
  let fixture: ComponentFixture<FaqBotIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqBotIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
