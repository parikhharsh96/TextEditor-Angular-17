import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorTabComponent } from './text-editor-tab.component';

describe('TextEditorTabComponent', () => {
  let component: TextEditorTabComponent;
  let fixture: ComponentFixture<TextEditorTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextEditorTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
