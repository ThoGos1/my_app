import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';


@Component({
  selector: 'app-tempnote',
  templateUrl: './tempnote.component.html',
  styleUrls: ['./tempnote.component.css']
})
export class TempnoteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  notePost$: Observable<any> | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.notePost$ = this.contentfulService.getEntryById(id);

      }
    );
  }

}