
import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
  getAllCourses() {
    return {
      message: 'all courses fetched',
      data: [],
    };
  }

  getCourseById(id: string) {
    return {
      message: 'course fetched',
      id,
    };
  }

  createCourse(name: string, code: string) {
    return {
      message: 'course created',
      data: { name, code },
    };
  }
}


