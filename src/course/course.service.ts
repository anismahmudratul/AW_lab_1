import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(){
        return "all courses from service";

    }
    getCourseById(id:string){
        return `course id form service ${id}`;

    }
    createCourse(){
        return `course created from service`;


    }
updateCourse(id:string){
    return `course updated from service ${id}`;



}
  patchCourse(id: string) {
    return `patch course ${id} from service`;
  }
  deleteCourse(id: string) {
    return `Delete course ${id} from Service`;
  }


}
