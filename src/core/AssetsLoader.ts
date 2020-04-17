export interface IImageAsset {
  image: HTMLImageElement;
}

export default class AssetsLoader {
  static async loadImage(url: string): Promise<IImageAsset> {
    return new Promise((resolve, reject) => {
      const i: HTMLImageElement = new Image();
      i.src = url;
      i.onload = () => {
        resolve({
          image: i,
        });
      }
    })
  }

  static async loadImages(urls: string[]): Promise<IImageAsset[]> {
    return Promise.all(urls.map(AssetsLoader.loadImage));
  }
}
