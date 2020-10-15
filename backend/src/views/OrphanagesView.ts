import Orphanage from '../models/Orphanage';
import ImagesView from './ImagesView';

class OrphanagesView {
  public render(orphanage: Orphanage): object {
    return {
      id: orphanage.id,
      name: orphanage.name,
      about: orphanage.about,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: ImagesView.renderMany(orphanage.images),
    }    
  }

  public renderMany(orphanages: Orphanage[]): Array<object> {
    return orphanages.map(orphanage => this.render(orphanage));
  }
}

export default new OrphanagesView();

