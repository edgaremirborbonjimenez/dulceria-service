import { Test, TestingModule } from '@nestjs/testing';
import { DulceriaController } from './dulceria.controller';

describe('DulceriaController', () => {
  let controller: DulceriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DulceriaController],
    }).compile();

    controller = module.get<DulceriaController>(DulceriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
