import Image from '../models/Images';

class ImagesView {
  public render(image: Image): object {
    return {
      id: image.id,
      url: `http://localhost:3333/uploads/${image.path}`,
    }    
  }

  public renderMany(images: Image[]): Array<object> {
    return images.map(image => this.render(image));
  }
}

export default new ImagesView();

