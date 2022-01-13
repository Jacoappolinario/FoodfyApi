import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UploadRecipeImagesUseCase } from './UploadRecipeImagesUseCase';

interface IFiles {
  filename: string;
}

class UploadRecipeImagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const images = request.files as IFiles[];

    const uploadRecipeImagesUseCase = container.resolve(
      UploadRecipeImagesUseCase,
    );

    const images_name = images.map(file => file.filename);

    await uploadRecipeImagesUseCase.execute({
      recipe_id: id,
      images_name,
    });

    return response.status(201).send();
  }
}

export { UploadRecipeImagesController };
