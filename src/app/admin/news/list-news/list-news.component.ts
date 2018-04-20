import { Component, EventEmitter, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UploadFile, UploadInput, UploadOutput } from '../../../../app/typescripts/pro/file-input';
import { humanizeBytes } from '../../../../app/typescripts/pro/file-input'
import { NewsService } from 'app/modules/news/news.service';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {
  @ViewChild('newsModal') newsModal: ElementRef;
  public newsArray;
      formData: FormData;
      files: UploadFile[];
      uploadInput: EventEmitter<UploadInput>;
      humanizeBytes: Function;
      dragOver: boolean;

      constructor(
        private newsService: NewsService
      ) {
          this.files = [];
          this.uploadInput = new EventEmitter<UploadInput>();
          this.humanizeBytes = humanizeBytes;
      }

      ngOnInit() {
        this.newsArray = this.newsService.getNews().map(e => {
          console.log(e)
          return e;
        })
      }

      showFiles() {
          let files = '';
          for (let i = 0; i < this.files.length; i ++) {
            files += this.files[i].name
             if (!(this.files.length - 1 === i)) {
               files += ', '
            }
          }
          return files;
       }

      startUpload(): void {
          const event: UploadInput = {
          type: 'uploadAll',
          url: '/upload',
          method: 'POST',
          data: { foo: 'bar' },
          concurrency: 1
          }
          this.uploadInput.emit(event);
      }

      cancelUpload(id: string): void {
          this.uploadInput.emit({ type: 'cancel', id: id });
      }

      onUploadOutput(output: UploadOutput | any): void {

          if (output.type === 'allAddedToQueue') {
          } else if (output.type === 'addedToQueue') {
            this.files.push(output.file); // add file to array when added
          } else if (output.type === 'uploading') {
            // update current data in files array for uploading file
            const index = this.files.findIndex(file => file.id === output.file.id);
            this.files[index] = output.file;
          } else if (output.type === 'removed') {
            // remove file from array when removed
            this.files = this.files.filter((file: UploadFile) => file !== output.file);
          } else if (output.type === 'dragOver') {
            this.dragOver = true;
          } else if (output.type === 'dragOut') {
          } else if (output.type === 'drop') {
            this.dragOver = false;
          }
          this.showFiles();

      }


      submitNewsForm(f) {
        console.log(f.value, this.newsArray);
        this.newsArray.unshift(f.value);
        this.newsModal.hide()

      }

}
