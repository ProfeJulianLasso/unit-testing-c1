import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { PruebaService } from './prueba.service';

describe('AppService', () => {
  let appService: AppService;
  let pruebaService: PruebaService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: PruebaService,
          useValue: {
            getHello2: jest.fn(),
          },
        },
      ],
    }).compile();
    pruebaService = app.get<PruebaService>(PruebaService);
    appService = app.get<AppService>(AppService);
  });

  it('should to be defined', () => {
    expect(appService).toBeDefined();
  });

  it('should return "Hello World!"', () => {
    // Arrange
    const mockData = 'Hello World!';
    const expected = 'Hello World!';
    jest.spyOn(pruebaService, 'getHello2').mockReturnValue(mockData);

    // Act
    const result = appService.getHello();

    // Assert
    expect(result).toEqual(expected);
    expect(pruebaService.getHello2).toHaveBeenCalled();
  });
});
