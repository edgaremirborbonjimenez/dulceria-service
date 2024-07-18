import { Test, TestingModule } from '@nestjs/testing';
import { DulceriaService } from './dulceria.service';

describe('DulceriaService', () => {
  let service: DulceriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DulceriaService],
    }).compile();

    service = module.get<DulceriaService>(DulceriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
