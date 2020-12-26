import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersviewComponent } from './playersview.component';

describe('PlayersviewComponent', () => {
  let component: PlayersviewComponent;
  let fixture: ComponentFixture<PlayersviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
